
export default function Header(){
  return (
    <header className="border-b border-black/10 bg-sand sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <a href="/" className="font-serif text-xl">Beyond Boarding</a>
        <nav className="flex gap-6 text-sm">
          <a href="/trips">Trips</a>
          <a href="/shop">Shop</a>
        </nav>
      </div>
    </header>
  )
}
