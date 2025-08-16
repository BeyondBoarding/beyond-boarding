
import trips from '../data/trips.json'
export default function Home(){
  const featured = trips[0]
  return (
    <div className="mt-6">
      <section className="relative rounded-xl overflow-hidden mb-10 card p-0">
        <div className="w-full h-[320px] flex items-center justify-center bg-sand">
          <p className="font-serif text-2xl">Hero video placeholder — add to /public/videos</p>
        </div>
        <div className="p-6">
          <h1 className="font-serif text-3xl mb-3">Beyond Boarding — Curated Journeys, Lifelong Memories</h1>
          <p>Travel is curiosity in motion — the spark that transforms imagination into lived experience. Beyond Boarding designs journeys that go deeper than a simple getaway.</p>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="font-serif text-2xl mb-4">Featured Trip</h2>
        <div className="card p-5">
          <h3 className="font-serif text-xl">{featured.name}</h3>
          <p className="text-sm opacity-80">{featured.location}</p>
          <a className="btn mt-3 inline-block" href={`/checkout?trip=${featured.slug}`}>Book Now</a>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="font-serif text-2xl mb-4">All Trips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trips.map(t => (
            <div key={t.slug} className="card p-5">
              <h3 className="font-serif text-lg">{t.name}</h3>
              <p className="text-sm opacity-80">{t.location}</p>
              <p className="text-sm mt-1"><strong>From:</strong> ${t.price.toLocaleString()}</p>
              {t.waitlist ? (
                <span className="inline-block mt-3 text-xs border border-black px-2 py-1 rounded">Waitlist</span>
              ) : (
                <a className="btn mt-3 inline-block" href={`/checkout?trip=${t.slug}`}>Book Now</a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
