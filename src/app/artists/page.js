// app/artists/page.js (Artist Listing)
import FilterBlock from '../components/FilterBlock'
import artists from '../data/artists.json'

export const metadata = {
  title: 'Artist Listing - Artistly',
  description: 'Browse and filter artists for your event.',
}

export default function ArtistListing() {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900 text-black dark:text-white space-y-6 p-4 max-w-6xl mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Browse Talented Performers</h1>
        <p className="text-gray-600 dark:text-gray-300">Use filters to find the perfect artist for your event.</p>
      </section>

      <FilterBlock artists={artists} />
    </div>
  )
}
