import { Router } from 'express';
import authRoutes from './auth.js';
import { requireAuth } from '../middleware/auth.js';
import { prisma } from '../utils/prisma.js';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

router.use('/auth', authRoutes);

router.get('/me', requireAuth, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.sub },
    select: { id: true, email: true, role: true, active: true }
  });
  res.json(user);
});

router.get('/bootstrap', requireAuth, async (_req, res) => {
  const [projects, employees, vacationRequests, timeEntries, settings] = await Promise.all([
    prisma.project.findMany({ where: { deletedAt: null } }),
    prisma.employee.findMany({ where: { deletedAt: null } }),
    prisma.vacationRequest.findMany({ where: { deletedAt: null } }),
    prisma.timeEntry.findMany({ where: { deletedAt: null }, orderBy: { date: 'desc' }, take: 20 }),
    prisma.setting.findFirst()
  ]);

  res.json({ projects, employees, vacationRequests, timeEntries, settings });
});

export default router;
