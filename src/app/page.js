/*
  Artistly.com - Front Page with Improved Background Color
*/

// Homepage (app/page.js)
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Artistly - Book Performers',
  description: 'Find and book talented performers for your events.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white-50 space-y-10 text-center p-4">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Discover & Book Talented Performers</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Connect with singers, dancers, speakers, and more for your next event.
        </p>
        <Link href="/artists" className="bg-blue-600 text-white px-4 py-2 rounded inline-block">Explore Artists</Link>
      </section>

      <section className="grid  grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-4 bg-yellow-50 border rounded shadow hover:scale-105 transition">
          <Image src="/images/singers.jpg" alt="Singer performing" width={400} height={250} className="w-full h-48 object-cover rounded" />
          <h2 className="font-bold text-xl mt-2">Singers</h2>
          <p className="text-gray-600">Find soulful soloists and energetic bands for your event.</p>
        </div>

        <div className="p-4 bg-yellow-50 border rounded shadow hover:scale-105 transition">
          <Image src="/images/dancers.jpg" alt="Dancers performing" width={400} height={250} className="w-full h-48 object-cover rounded" />
          <h2 className="font-bold text-xl mt-2">Dancers</h2>
          <p className="text-gray-600">Book captivating dance groups and solo performers.</p>
        </div>

        <div className="p-4 bg-yellow-50  border rounded shadow hover:scale-105 transition">
          <Image src="/images/djs.jpg" alt="DJ playing music" width={400} height={250} className="w-full h-48 object-cover rounded" />
          <h2 className="font-bold text-xl mt-2">DJs</h2>
          <p className="text-gray-600">Hire professional DJs to set the perfect vibe.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold">Why Choose Artistly?</h2>
        <ul className="text-left space-y-2 list-disc list-inside mx-auto">
          <li>Handpicked, verified performers</li>
          <li>Transparent pricing and easy booking</li>
          <li>Diverse talent across multiple categories</li>
          <li>Simple, hassle-free experience</li>
        </ul>
      </section>
    </div>
  )
}
