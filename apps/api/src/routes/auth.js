import { Router } from 'express';
import bcrypt from 'bcryptjs';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { prisma } from '../utils/prisma.js';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/jwt.js';

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

router.post('/login', loginLimiter, async (req, res) => {
  const parseResult = loginSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ message: 'Ungültige Eingabe' });
  }

  const { email, password } = parseResult.data;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !user.active) {
    return res.status(401).json({ message: 'Login fehlgeschlagen' });
  }

  if (user.lockedUntil && user.lockedUntil > new Date()) {
    return res.status(423).json({ message: 'Konto temporär gesperrt' });
  }

  const matches = await bcrypt.compare(password, user.passwordHash);
  if (!matches) {
    const failedLoginAttempts = user.failedLoginAttempts + 1;
    const shouldLock = failedLoginAttempts >= 5;

    await prisma.user.update({
      where: { id: user.id },
      data: {
        failedLoginAttempts,
        lockedUntil: shouldLock ? new Date(Date.now() + 15 * 60 * 1000) : null
      }
    });

    return res.status(401).json({ message: 'Login fehlgeschlagen' });
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { failedLoginAttempts: 0, lockedUntil: null }
  });

  const payload = { sub: user.id, email: user.email, role: user.role };
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

  return res.json({ accessToken, user: payload });
});

router.post('/refresh', async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ message: 'Kein Refresh Token' });

  try {
    const decoded = verifyRefreshToken(token);
    const accessToken = signAccessToken({ sub: decoded.sub, email: decoded.email, role: decoded.role });
    return res.json({ accessToken });
  } catch {
    return res.status(401).json({ message: 'Ungültiger Refresh Token' });
  }
});

router.post('/logout', (_req, res) => {
  res.clearCookie('refreshToken');
  res.status(204).send();
});

export default router;
