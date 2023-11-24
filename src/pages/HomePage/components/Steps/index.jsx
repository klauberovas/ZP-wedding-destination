import './style.css';
import { Step } from '../Step';
import { Button } from '../../../../components/Button';

export const Steps = () => {
  return (
    <section className="steps">
      <h2 className="title title--semibold">Jak postupovat?</h2>
      <div className="steps__container">
        <Step />
      </div>
      <Button label="Svatební kalkulačka" url="/wedding-calculate" />
    </section>
  );
};
