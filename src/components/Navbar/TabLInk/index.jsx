import { Link } from 'react-router-dom';
import './style.css';

export const TabLink = ({ toActive, onClick, children, isClick }) => {
  return (
    <Link
      to={toActive}
      className={`navbar__item ${isClick ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
