# TimeFlow

Self-hosted Zeiterfassung & Projektmanagement (React + Express + Prisma + PostgreSQL), Docker-ready für LAN/Internet.

## Stack
- Frontend: React 18, Vite, TailwindCSS, React Router, Lucide
- Backend: Node.js 20, Express, Prisma ORM
- Datenbank: PostgreSQL
- Auth: E-Mail/Passwort, JWT Access + Refresh Cookie, bcrypt, RBAC

## Projektstruktur
- `apps/web`: Frontend (SPA)
- `apps/api`: REST API
- `prisma`: Prisma Schema
- `nginx`: Nginx Reverse Proxy + SPA Fallback

## Quickstart (Production)
```bash
docker compose up -d --build
```

App ist erreichbar unter:
- `http://localhost:8080`

Wichtig:
- Nur `web` published Port (`8080:80`)
- `api` und `db` sind nur intern im Docker-Netz erreichbar

## Default Login (Seed)
Beim ersten Start wird ein Admin erzeugt:
- E-Mail: `admin@timeflow.local`
- Passwort: `ChangeMe123!`

> Passwort direkt nach dem ersten Login ändern.

## Dev Setup
```bash
docker compose -f docker-compose.dev.yml up --build
```

- Frontend: `5173`
- API: intern auf `3000`
- DB: intern auf `5432`

## Start/Stop/Logs
```bash
docker compose up -d --build
docker compose ps
docker compose logs -f
docker compose down
```

## Backup / Restore (PostgreSQL)
Backup:
```bash
docker compose exec -T db pg_dump -U timeflow timeflow > backup.sql
```

Restore:
```bash
cat backup.sql | docker compose exec -T db psql -U timeflow -d timeflow
```

## Features (MVP)
- Dashboard KPI Cards
- Zeiterfassung mit Timer-Block, Wochen-/Eintragsansicht
- Projektübersicht (Aktiv/Abgeschlossen/Archiv/Alle)
- Urlaub & Abwesenheit mit Kalender und Anträgen
- Team-Genehmigungen
- Einstellungen (Firma, Mitarbeiter, Teams, Feiertage, Module)
- RBAC (Admin / Manager / Mitarbeiter)
- Login Rate-Limit + temporärer Account-Lock
- Audit-Log Datenmodell
- Soft Delete Felder in zentralen Entitäten
- SPA Routing via Nginx `try_files`

## Hinweise
- Es werden keine externen Cloud APIs verwendet.
- Prisma Migrationen/Seeds können im API-Container ausgeführt werden:
```bash
docker compose exec api npx prisma migrate deploy --schema=prisma/schema.prisma
docker compose exec api node apps/api/prisma/seed.js
```
