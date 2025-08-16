
'use client'
import { useState } from 'react'
import trips from '../../data/trips.json'

export default function Checkout({ searchParams }){
  const trip = trips.find(t => t.slug === searchParams.trip)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  if(!trip) return <div className="py-8">No trip selected.</div>
  const deposit = Math.round(trip.price * trip.depositPct)

  async function startCheckout(e){
    e.preventDefault()
    setLoading(true); setErr('')
    const form = new FormData(e.currentTarget)
    const res = await fetch('/api/checkout', { method:'POST', body: form })
    try{
      const data = await res.json()
      if(data.url){ window.location.href = data.url }
      else { setErr('Unable to start checkout.') }
    }catch{ setErr('Unable to start checkout.') }
    setLoading(false)
  }

  return (
    <div className="py-10">
      <h1 className="font-serif text-3xl mb-2">Checkout — {trip.name}</h1>
      <p className="mb-6">Deposit due today: <strong>${deposit.toLocaleString()}</strong> (20%)</p>
      <form onSubmit={startCheckout} className="grid gap-3 max-w-md">
        <input type="hidden" name="trip" value={trip.slug} />
        <input required name="name" placeholder="Full name" className="border px-3 py-2 rounded" />
        <input required name="email" type="email" placeholder="Email" className="border px-3 py-2 rounded" />
        <button className="btn" disabled={loading}>{loading ? 'Redirecting…' : 'Proceed to Payment'}</button>
        {err && <p className="text-sm text-red-700">{err}</p>}
      </form>
    </div>
  )
}
