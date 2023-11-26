import './style.css';
import { Package } from '../../Package';
import { Button } from '../../../../components/Button';
import { dataDestinationPackages } from '../../DataPackages';
import dominicana from './../../img/dominicana.jpg';

export const PackagesTwo = () => {
  const selectedPackage = dataDestinationPackages[1];

  const photo = dominicana;

  return (
    <section id="destination-packages">
      <div className="container-packages">
        <Package
          key={selectedPackage.id}
          name={selectedPackage.name}
          package={selectedPackage.package}
          photo={photo}
          contains={selectedPackage.contains}
          price={selectedPackage.price}
        />
      </div>
      <div className="packages-button">
        <Button label="Mám zájem" />
      </div>
    </section>
  );
};
