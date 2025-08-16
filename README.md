
# Beyond Boarding — Next.js + Tailwind + Stripe (TEST MODE)

"Book Now" sends users straight to Stripe Checkout for a **20% deposit**.

## Local
1) npm install
2) create `.env.local`:
   STRIPE_SECRET_KEY=sk_test_xxx
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
3) npm run dev → http://localhost:3000

## Vercel
- Import this repo → add the same env vars (use TEST keys first).
- After testing, switch to LIVE keys and set `NEXT_PUBLIC_SITE_URL=https://beyondboarding.co`.

## Stripe test card
4242 4242 4242 4242 (any future expiry, any CVC, any ZIP)
