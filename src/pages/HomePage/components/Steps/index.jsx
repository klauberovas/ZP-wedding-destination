import './style.css';
import { Step } from '../Step';
import { Link } from 'react-router-dom';

export const Steps = () => {
  return (
    <section className="steps">
      <h2 className="title title--semibold">Jak postupovat?</h2>
      <div className="steps__container">
        <Step />
      </div>
      <div className="button-container">
        <Link to="/wedding-calculate" className="button">
          Svatební kalkulačka
        </Link>
      </div>
      ;
    </section>
  );
};
