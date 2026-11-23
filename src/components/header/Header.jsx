import { NavLink } from 'react-router';
import logo from '../../assets/cyber.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo DevSec" className="logo" max-width="100%" height="auto" />
      </div>
      <nav>
        <NavLink to="/" end className="nav-link">Accueil</NavLink>
        <NavLink to="/a-propos" className="nav-link">A propos</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header