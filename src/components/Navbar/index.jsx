import { Link } from 'react-router-dom';
import './style.css';

export const Navbar = ({isOpened, switchOff}) => {

  return (
    
    <nav className={`navbar ${isOpened ? 'navbar--open' : ''}`}>
      <ul>
        <li>
          <Link to="/package" onClick={switchOff}>Svatební zájezdy</Link>
        </li>
        <li>
          <Link to="/wedding-calculate" onClick={switchOff}>Svatební kalkulačka</Link>
        </li>
        <li>
          <Link to="/reference" onClick={switchOff}>Reference</Link>
        </li>
        <li>
          <Link to="/contact" onClick={switchOff}>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};
