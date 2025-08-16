
import trips from '../../data/trips.json'
export default function Trips(){
  return (
    <div className="py-8">
      <h1 className="font-serif text-3xl mb-6">Upcoming Trips</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
    </div>
  )
}
