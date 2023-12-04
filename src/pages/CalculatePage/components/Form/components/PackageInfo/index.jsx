import './style.css';
import arrow from './img/down.svg';
import { useState } from 'react';

export const PackageInfo = ({ currentPackage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="wedding-calculate__package-info">
      <div className="package__title">
        <h5>* V ceně balíčku je:</h5>
        <img
          onClick={handleClick}
          className="package__roller"
          src={arrow}
          alt="icon down"
        />
      </div>
      {isOpen ? (
        <ul className="package__content--hidden">
          {currentPackage.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
