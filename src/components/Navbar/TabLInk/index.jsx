import { Link } from "react-router-dom";
import './style.css'

export const TabLink = ({ toActive, activeTab, onClick, children }) => {
  const isActive = activeTab === toActive.slice(1);
  return (
    <Link to={toActive} className={`navbar__item ${isActive ? 'active' : ''}`} onClick={onClick}>
      {children}
    </Link>
  );
};
