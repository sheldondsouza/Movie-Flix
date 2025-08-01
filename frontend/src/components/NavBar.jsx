import {Link} from 'react-router-dom';
import '../css/NavBar.css'; // Assuming you have a CSS file for styling the Navbar
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MovieFlix</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favourite" className="nav-link">Favourite</Link>
      </div>
    </nav>
  );
}

export default NavBar;