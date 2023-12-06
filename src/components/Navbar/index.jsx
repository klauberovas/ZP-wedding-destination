import './style.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TabLink } from './TabLInk';

export const Navbar = ({ isOpened, switchOff }) => {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);
  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(window.location.pathname.slice(1));
  }, [location]);

  const handleClick = () => {
    switchOff();
  };

  return (
    <nav className={`navbar ${isOpened ? 'navbar--open' : ''}`}>
      <ul className="navbar__list">
        <li className="navbar__item">
          <TabLink
            isClick={'package' === currentUrl}
            toActive="/package"
            onClick={handleClick}
          >
            Svatební zájezdy
          </TabLink>
        </li>
        <li className="navbar__item">
          <TabLink
            isClick={'wedding-calculate' === currentUrl}
            toActive="/wedding-calculate"
            onClick={handleClick}
          >
            Svatební kalkulačka
          </TabLink>
        </li>
        <li className="navbar__item">
          <TabLink
            isClick={'reference' === currentUrl}
            toActive="/reference"
            onClick={handleClick}
          >
            Reference
          </TabLink>
        </li>
        <li className="navbar__item">
          <TabLink
            isClick={'contact' === currentUrl}
            toActive="/contact"
            onClick={handleClick}
          >
            Kontakt
          </TabLink>
        </li>
      </ul>
    </nav>
  );
};
