import { Link } from 'react-router-dom';
import './style.css';

export const Button = ({ label, url }) => {
  return (
    <div className="button-container">
      <Link to={url} className="button">
        {label}
      </Link>
    </div>
  );
};
