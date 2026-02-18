import { verifyAccessToken } from '../utils/jwt.js';

export const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Nicht autorisiert' });
  }

  try {
    const token = authHeader.replace('Bearer ', '');
    req.user = verifyAccessToken(token);
    return next();
  } catch {
    return res.status(401).json({ message: 'Token ungültig' });
  }
};

export const requireRole = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Keine Berechtigung' });
  }
  return next();
};
