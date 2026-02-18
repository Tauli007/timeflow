FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY apps/api/package*.json ./apps/api/
RUN npm install
COPY . .
RUN npx prisma generate --schema=prisma/schema.prisma
EXPOSE 3000
CMD ["sh", "-c", "npx prisma migrate deploy --schema=prisma/schema.prisma && node apps/api/prisma/seed.js && npm --workspace apps/api run start"]
