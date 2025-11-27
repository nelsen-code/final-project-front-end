import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ManhwaList() {
  const [manhwa, setManhwa] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/manhwa')
      .then(response => response.json())
      .then(data => setManhwa(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {manhwa.map(item => (
        <div key={item.id} className="bg-white p-4 rounded shadow">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <Link to={`/manhwa/${item.id}`} className="text-blue-500 hover:underline">Lihat Detail</Link>
        </div>
      ))}
    </div>
  );
}

export default ManhwaList;