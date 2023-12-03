import { Link } from 'react-router-dom';
import './style.css';

export const Button = ({ label, url }) => {
  return (
    <div className="button-container">
      {!url ? (
        <button className="button  button--no-border" type="submit">
          {label}
        </button>
      ) : (
        <Link className="button" to={url}>
          {label}
        </Link>
      )}
    </div>
  );
};
