import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ManhwaList() {
  const [manhwa, setManhwa] = useState([]);
  const [filteredManhwa, setFilteredManhwa] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/manhwa')
      .then(response => response.json())
      .then(data => {
        setManhwa(data);
        setFilteredManhwa(data);
      });
  }, []);

  useEffect(() => {
    setFilteredManhwa(
      manhwa.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, manhwa]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/manhwa/${id}`, { method: 'DELETE' })
      .then(() => {
        setManhwa(manhwa.filter(item => item.id !== id));
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cari manhwa..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredManhwa.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <div className="mt-2">
              <Link to={`/manhwa/${item.id}`} className="text-blue-500 hover:underline mr-2">Lihat Detail</Link>
              <Link to={`/edit/${item.id}`} className="text-green-500 hover:underline mr-2">Edit</Link>
              <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:underline">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManhwaList;