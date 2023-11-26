import './style.css';
import buttonUp from './img/button-up.svg';

export const ButtonUp = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="button-up" onClick={handleScrollToTop}>
      <img className="button-up__icon" src={buttonUp} alt="icon button up" />
    </section>
  );
};
