import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from 'next-themes'
import PageWrapper from './components/PageWrapper'

export const metadata = {
  title: 'Artistly - Book Performers',
  description: 'Find and book talented performers for your events.',
  metadataBase: new URL('http://localhost:3000'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <PageWrapper>
            {children}
          </PageWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
