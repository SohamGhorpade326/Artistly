export default function Table({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Fee</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(artist => (
            <tr key={artist.id} className="text-center">
              <td className="border p-2">{artist.name}</td>
              <td className="border p-2">{artist.category}</td>
              <td className="border p-2">{artist.location}</td>
              <td className="border p-2">{artist.fee}</td>
              <td className="border p-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
