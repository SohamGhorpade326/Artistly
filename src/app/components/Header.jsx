/*
  Artistly.com - Header with Theme Toggle Button (Light/Dark Mode)
*/
"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-lg">Artistly</Link>
      <nav className="flex items-center space-x-2">
        <Button variant="secondary" asChild><Link href="/artists">Artists</Link></Button>
        <Button variant="secondary" asChild><Link href="/onboard">Onboard</Link></Button>
        <Button variant="secondary" asChild><Link href="/dashboard">Dashboard</Link></Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </Button>
      </nav>
    </header>
  )
}
