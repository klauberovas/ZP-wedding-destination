
import { Package } from '../../Package';
import { dataDestinationPackages } from '../../DataPackages';
import dominicana from './../../img/dominicana.jpg';

export const PackagesTwo = () => {
  const selectedPackage = dataDestinationPackages[1];

  const photo = dominicana;

  return (
    <section id="destination-packages">
        <Package
          key={selectedPackage.id}
          name={selectedPackage.name}
          packages={selectedPackage.pack}
          photo={photo}
          contains={selectedPackage.contains}
          price={selectedPackage.price}
        />
    </section>
  );
};
