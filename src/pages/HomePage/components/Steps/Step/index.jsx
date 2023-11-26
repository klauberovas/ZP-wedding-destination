import './style.css';
import { Link } from 'react-router-dom';

export const Step = ({ icon, text, alt, url }) => {
  return (
    <div className="step">
      {url === null ? (
        <a href="#destination">
          <div className="step__icon">
            <img src={icon} alt={alt} />
          </div>
          <p className="step__text">{text}</p>
        </a>
      ) : (
        <Link to={url}>
          <div className="step__icon">
            <img src={icon} alt={alt} />
          </div>
          <p className="step__text">{text}</p>
        </Link>
      )}
    </div>
  );
};
