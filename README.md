# Spalding Fiber Website

React rebuild of [spfiber.co](https://spfiber.co) — Vite, React Router, Tailwind CSS, Swiper and Framer Motion.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Project structure

```
api/contact.js         Vercel function that emails contact-form messages (Resend)
src/data/site.js       All page content: nav, contact info, plans, services, testimonials
src/data/policies.js   Privacy, Terms and Refund policy text
src/components/        layout/ (header, footer), sections/, ui/, contact/, icons.jsx
src/pages/             One file per route
src/assets/images/     Site images
```

To change text, prices or contact details, edit `src/data/site.js`.

## Deployment (Vercel)

`vercel.json` routes every non-API path to `index.html` so page refreshes work.

The contact form needs these environment variables in Vercel:

| Variable             | Purpose                                               |
| -------------------- | ----------------------------------------------------- |
| `RESEND_API_KEY`     | API key from resend.com                               |
| `CONTACT_TO_EMAIL`   | Inbox for messages (default `info@spaldingfiber.co`)  |
| `CONTACT_FROM_EMAIL` | Verified sender address on Resend                     |
