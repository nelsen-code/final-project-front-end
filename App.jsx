import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManhwaList from './components/ManhwaList';
import ManhwaDetail from './components/ManhwaDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Manhwa App</h1>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<ManhwaList />} />
            <Route path="/manhwa/:id" element={<ManhwaDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;