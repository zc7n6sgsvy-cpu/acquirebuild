# Acquire Build

Studio site for [acquirebuild.com](https://acquirebuild.com).

I build the software and hardware assets an operator can sell from.

## Stack

Next.js App Router, TypeScript, Tailwind v4. Deployed on Vercel.

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Lead form

`POST /api/lead` validates the brief and returns a success state.

If `RESEND_API_KEY` and `LEADS_TO` are set, it emails the brief. If they are not set, the request is accepted and logged. The client falls back to mailto on network failure.

## Case studies

Work cards are asset-class frames until real cases are dropped in. Search `TODO` for those placeholders.
