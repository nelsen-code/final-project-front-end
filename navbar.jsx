import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Manhwa App</Link>
        </h1>
        <nav>
          <Link to="/" className="mr-4 hover:underline">Daftar Manhwa</Link>
          <Link to="/add" className="hover:underline">Tambah Manhwa</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;