import './style.css';
import { Link } from 'react-router-dom';

export const Step = ({ icon, text, alt, url }) => {
  return (
    <div className="step">
      <Link to={url === null ? '#destination' : url}>
        <div className="step__icon">
          <img src={icon} alt={alt} />
        </div>
        <p className="step__text">{text}</p>
      </Link>
    </div>
  );
};
