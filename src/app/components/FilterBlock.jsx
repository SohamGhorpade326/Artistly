"use client"
import { useState } from 'react'
import ArtistCard from './ArtistCard'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'

export default function FilterBlock({ artists }) {
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [filtered, setFiltered] = useState(artists)

  const handleFilter = () => {
    let data = artists
    if (category) data = data.filter(a => a.category.toLowerCase() === category.toLowerCase())
    if (location) data = data.filter(a => a.location.toLowerCase().includes(location.toLowerCase()))
    setFiltered(data)
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category (e.g., Singers, Dancers)"
        />
        <Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <Button onClick={handleFilter}>Filter</Button>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No artists found matching your filters.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(artist => (
            <ArtistCard key={artist.id} artist={artist} showImage />
          ))}
        </div>
      )}
    </div>
  )
}
