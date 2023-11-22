import { Link } from 'react-router-dom';
import './style.css';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/package">Svatební zájezdy</Link>
        </li>
        <li>
          <Link to="/wedding-calculate">Svatební kalkulačka</Link>
        </li>
        <li>
          <Link to="/reference">Reference</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};
