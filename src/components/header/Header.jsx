import { NavLink } from 'react-router';
import logo from '../../assets/cyber.png'
import './Header.css'

const Header = () => {
  return (
    <header className="site-header">
      <NavLink to="/" end className="site-brand" aria-label="Accueil - portfolio de Mathieu Plumecocq">
        <img src={logo} alt="" className="logo" />
      </NavLink>
      <nav aria-label="Navigation principale">
        <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Accueil</NavLink>
        <NavLink to="/a-propos" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>À propos</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header