import './style.css';
import { Package } from '../../Package';
import { dataDestinationPackages } from '../../DataPackages';
import maldives from './../../img/maldives.jpg';

export const PackagesOne = () => {
  const selectedPackage = dataDestinationPackages[0];

  const photo = maldives;

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
    </section>
  );
};
