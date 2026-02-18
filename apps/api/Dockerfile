FROM node:20-bookworm-slim

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl libssl3 ca-certificates \
  && rm -rf /var/lib/apt/lists/*

ENV PRISMA_CLI_BINARY_TARGETS=debian-openssl-3.0.x

COPY package*.json ./
COPY apps/api/package*.json ./apps/api/

RUN npm install

COPY . .

RUN npx prisma generate --schema=prisma/schema.prisma

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy --schema=prisma/schema.prisma && node apps/api/prisma/seed.js && npm --workspace apps/api run start"]
