import './style.css';
import { useState } from 'react';
import { TabLink } from './TabLInk';

export const Navbar = ({ isOpened, switchOff }) => {
  const [active, setActive] = useState('/');

  const handleClick = (tab) => {
    setActive(tab);
    switchOff();
  };

  return (
    <nav className={`navbar ${isOpened ? 'navbar--open' : ''}`}>
      <ul className="navbar__list">
        <li className="navbar__item">
        <TabLink toActive="/package" activeTab={active} onClick={() => handleClick('package')}>
          Svatební zájezdy
          </TabLink>
        </li>
        <li className="navbar__item">
        <TabLink toActive="/wedding-calculate" activeTab={active} onClick={() => handleClick('wedding-calculate')}>
          Svatební kalkulačka
        </TabLink>
        </li>
        <li className="navbar__item">
        <TabLink toActive="/reference" activeTab={active} onClick={() => handleClick('reference')}>
          Reference
        </TabLink>
        </li>
        <li className="navbar__item">
        <TabLink toActive="/contact" activeTab={active} onClick={() => handleClick('contact')}>
          Kontakt
        </TabLink>
        </li>
      </ul>
    </nav>
  );
};
