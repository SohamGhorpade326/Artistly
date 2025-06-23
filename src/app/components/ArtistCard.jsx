import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import Image from 'next/image'
import { Button } from "../../components/ui/button"

export default function ArtistCard({ artist, showImage }) {
  return (
    <Card className="hover:scale-105 transition overflow-hidden">
      {showImage && (
        <div className="w-full h-100 relative">
          <Image
            src={`/images/${artist.image || 'default.jpg'}`}
            alt={`${artist.name} performing`}
            fill
            className="object-cover rounded-t"
           
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{artist.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <p>Category: {artist.category}</p>
        <p>Location: {artist.location}</p>
        <p>Price Range: {artist.price}</p>
        <Button className="w-full">Ask for Quote</Button>
      </CardContent>
    </Card>
  )
}
