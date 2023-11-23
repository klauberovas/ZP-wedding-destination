import { Link } from 'react-router-dom';
import './style.css';

export const Navbar = ({ isOpened, switchOff }) => {
  return (
    <nav className={`navbar ${isOpened ? 'navbar--open' : ''}`}>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/package" onClick={switchOff}>
            Svatební zájezdy
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/wedding-calculate" onClick={switchOff}>
            Svatební kalkulačka
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/reference" onClick={switchOff}>
            Reference
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" onClick={switchOff}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};
