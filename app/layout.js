
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Beyond Boarding',
  description: 'Curated journeys that go beyond a momentary escape.'
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
