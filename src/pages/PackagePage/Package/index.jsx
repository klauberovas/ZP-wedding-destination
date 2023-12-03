import './style.css';
import { Button } from '../../../components/Button';

export const Package = ({ name, packages, photo, contains, price }) => {
  return (
    <>
      <div className="container-destination">
        <div className="pic-container">
          <img className="package-pic" src={photo}></img>
        </div>
        <div className="package-section">
          <h2 className="title-package">{name}</h2>
          <div className="type-packages">{packages}</div>
          <div className="contains">
            <ul className="ul-pac">
              {contains.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="package-price">{price}</div>
          <Button label="Mám zájem" url="/contact" />
        </div>
      </div>
    </>
  );
};
