
import './css/App.css'
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Favourite from './pages/Favourite';
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/Navbar';

function App() {
 const movieNumber = 1;

  return (
    <MovieProvider>
    <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </main>
    </MovieProvider>
  );
}











export default App;
