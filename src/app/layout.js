// 1. Root Layout (app/layout.js)
import './globals.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

export const metadata = {
  title: 'Artistly - Book Performers',
  description: 'Find and book talented performers for your events.',
  openGraph: {
    title: 'Artistly - Book Performers',
    description: 'Connecting event planners with top artists.',
    images: ['/images/og-image.jpg']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}