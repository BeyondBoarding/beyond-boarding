
export default function Footer(){
  return (
    <footer className="mt-20 border-t border-black/10">
      <div className="container py-10 text-sm">
        <p className="font-serif">Travel is curiosity in motion — transforming imagination into lived experience.</p>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p>&copy; 2025 Beyond Boarding</p>
          <div className="flex gap-6">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
