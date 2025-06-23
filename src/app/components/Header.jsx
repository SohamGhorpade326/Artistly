import Link from 'next/link'

/** Site header with navigation */
export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <Link href="/" className="font-bold text-lg">Artistly</Link>
      <nav className="space-x-4">
        <Link href="/artists">Artists</Link>
        <Link href="/onboard">Onboard</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  )
}
