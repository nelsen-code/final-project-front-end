export default function ManhwaCard({ item }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={item.image} className="h-56 w-full object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-xl">{item.title}</h2>
        <p className="text-gray-600">{item.genre}</p>
        <p className="text-sm text-gray-500">Author: {item.author}</p>
      </div>
    </div>
  );
}
