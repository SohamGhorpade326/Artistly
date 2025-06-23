// app/dashboard/page.js (Manager Dashboard)
import Table from '../../components/Table'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const artistData = [
  { id: 1, name: 'Alice', category: 'Singers', location: 'Mumbai', fee: '₹50k - ₹1L' },
  { id: 2, name: 'Raj', category: 'Dancers', location: 'Delhi', fee: '₹30k - ₹80k' },
  { id: 3, name: 'Sara', category: 'Speakers', location: 'Bangalore', fee: '₹20k - ₹50k' }
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 text-black dark:text-white p-4 flex justify-center">
      <div className="max-w-6xl w-full space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Manager Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            {artistData.length === 0 ? (
              <p className="text-center text-gray-500 mt-4">No artist submissions available.</p>
            ) : (
              <Table data={artistData} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}