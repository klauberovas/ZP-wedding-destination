import './style.css';
import { Step } from '../Step';
import { Button } from '../../../../components/Button';
import { Title } from '../../../../components/Title';
import search from './img/icon-search.svg';
import calculate from './img/icon-calculate.svg';
import telephone from './img/icon-telephone.svg';
import yes from './img/icon-yes.svg';

const data = [
  {
    icon: search,
    alt: 'Icon search',
    text: 'Vyber si svou svatební destinaci',
  },
  {
    icon: calculate,
    alt: 'Icon wedding calculate',
    text: 'Spočítej si náklady na svatbu',
  },
  {
    icon: telephone,
    alt: 'Icon telephone',
    text: 'Kontaktuj nás!',
  },
  {
    icon: yes,
    alt: 'Icon yes',
    text: 'Řekni ANO!',
  },
];

export const Steps = () => {
  return (
    <section className="steps">
      <Title label="Jak postupovat?" />
      <div className="steps__container">
        {data.map(({ icon, alt, text }, index) => (
          <Step key={index} icon={icon} alt={alt} text={text} />
        ))}
      </div>
      <Button label="Svatební kalkulačka" url="/wedding-calculate" />
    </section>
  );
};
