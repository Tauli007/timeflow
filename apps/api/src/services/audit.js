import { prisma } from '../utils/prisma.js';

export const logAudit = async ({ actorUserId, action, entity, entityId, beforeJson, afterJson, ip }) => {
  await prisma.auditLog.create({
    data: { actorUserId, action, entity, entityId, beforeJson, afterJson, ip }
  });
};
