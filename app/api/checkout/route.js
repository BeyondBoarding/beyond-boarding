
import trips from '../../../data/trips.json'
import Stripe from 'stripe'

export async function POST(req){
  const form = await req.formData()
  const slug = form.get('trip')
  const name = form.get('name')
  const email = form.get('email')

  const trip = trips.find(t => t.slug === slug)
  if(!trip) return Response.json({ error: 'Trip not found' }, { status: 400 })

  const stripeSecret = process.env.STRIPE_SECRET_KEY
  const publishable = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  if(!stripeSecret || !publishable) return Response.json({ error: 'Missing Stripe keys' }, { status: 500 })

  const stripe = new Stripe(stripeSecret, { apiVersion: '2023-10-16' })
  const depositCents = Math.round(trip.price * trip.depositPct * 100)
  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer_email: email || undefined,
    metadata: {
      trip: trip.slug,
      trip_name: trip.name,
      customer_name: name || '',
      deposit_pct: String(trip.depositPct),
      base_price: String(trip.price)
    },
    line_items: [{
      quantity: 1,
      price_data: {
        currency: 'usd',
        unit_amount: depositCents,
        product_data: { name: `${trip.name} — 20% Deposit` }
      }
    }],
    success_url: `${origin}/trips`,
    cancel_url: `${origin}/checkout?trip=${trip.slug}`
  })

  return Response.json({ url: session.url }, { status: 200 })
}
