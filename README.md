<<<<<<< HEAD
# AssetFlow

Enterprise Asset & Resource Management System — Odoo Hackathon project.

## Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Vite, Tailwind CSS, React Router, Axios, Recharts |
| Backend | Node.js, Express, Sequelize, MySQL |
| Auth | JWT + RBAC |

## Quick Start

### 1. Start MySQL

```bash
docker compose up -d
```

### 2. Backend

```bash
cd backend
cp .env.example .env
npm install
npm run db:migrate
npm run db:seed
npm run dev
```

API: http://localhost:5000/api/health

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

App: http://localhost:5173

## Demo Accounts

| Email | Role | Password |
|-------|------|----------|
| admin@assetflow.com | Super Admin | Admin@123 |
| manager@assetflow.com | Asset Manager | Admin@123 |
| employee@assetflow.com | Employee | Admin@123 |

## Phase 1 Features (Implemented)

- JWT authentication with refresh tokens
- Role-based access control (7 roles, granular permissions)
- Department, location, category master data
- Asset CRUD with lifecycle state machine
- Status history & audit logging
- Assignment request → approval → assignment workflow
- Asset return (check-in) workflow
- Dashboard with Recharts KPIs
- ERP-style sidebar layout

## Project Structure

```
assetflow/
├── backend/          # Express API + Sequelize
├── frontend/         # React SPA
├── docker-compose.yml
└── ARCHITECTURE.md   # Full architecture document
```

## API Base URL

`/api/v1`

See `ARCHITECTURE.md` for complete API, database schema, and workflow documentation.
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> b1b3da919fe0aaa999be1141cdf6f40c0f3a7912
