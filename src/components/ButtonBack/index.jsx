import './style.css';
import buttonBack from './img/button-back.svg';
import { Link } from 'react-router-dom';

export const ButtonBack = () => {
  return (
    <Link to={'/'} className="button-back">
      <img
        className="button-back__img"
        src={buttonBack}
        alt="Icon button back"
      />
      <p className="button-back__label">Zpět na úvod</p>
    </Link>
  );
};
