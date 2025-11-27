import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditManhwa() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: '', description: '', image: '', genre: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/manhwa/${id}`)
      .then(response => response.json())
      .then(data => setForm({ ...data, genre: data.genre.join(', ') }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedManhwa = {
      ...form,
      genre: form.genre.split(',').map(g => g.trim())
    };
    fetch(`http://localhost:3000/manhwa/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedManhwa)
    }).then(() => navigate('/'));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Manhwa</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Judul" value={form.title} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
        <textarea name="description" placeholder="Deskripsi" value={form.description} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
        <input name="image" placeholder="URL Gambar" value={form.image} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
        <input name="genre" placeholder="Genre (pisahkan dengan koma)" value={form.genre} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Simpan Perubahan</button>
      </form>
    </div>
  );
}

export default EditManhwa;