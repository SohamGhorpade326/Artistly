import FilterBlock from '../components/FilterBlock'
import artists from '../data/artists.json'

export const metadata = {
  title: 'Artist Listing - Artistly',
  description: 'Browse and filter artists for your event.',
}

export default function ArtistListing() {
  return (
    <div className="space-y-6 bg-yellow-50 p-4  mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Browse Talented Performers</h1>
        <p className="text-gray-600">Use filters to find the perfect artist for your event.</p>
      </section>

      {/* FilterBlock handles filtering UI and renders ArtistCards */}
      <FilterBlock artists={artists} />
    </div>
  )
}
