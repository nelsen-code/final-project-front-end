import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddManhwa() {
  const [form, setForm] = useState({ title: '', description: '', image: '', genre: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newManhwa = {
      ...form,
      genre: form.genre.split(',').map(g => g.trim()),
      id: Date.now() // ID sederhana
    };
    fetch('http://localhost:3000/manhwa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newManhwa)
    }).then(() => navigate('/'));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Tambah Manhwa Baru</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Judul" value={form.title} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
        <textarea name="description" placeholder="Deskripsi" value={form.description} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
        <input name="image" placeholder="URL Gambar" value={form.image} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
        <input name="genre" placeholder="Genre (pisahkan dengan koma)" value={form.genre} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Tambah</button>
      </form>
    </div>
  );
}

export default AddManhwa;