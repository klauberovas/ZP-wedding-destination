
import { Package } from '../../Package';
import { dataDestinationPackages } from '../../DataPackages';
import mauricius from './../../img/mauricius.png';

export const PackagesThree = () => {
  const selectedPackage = dataDestinationPackages[2];

  const photo = mauricius;

  return (
    <section id="destination-packages">
        <Package
          key={selectedPackage.id}
          name={selectedPackage.name}
          package={selectedPackage.pack}
          photo={photo}
          contains={selectedPackage.contains}
          price={selectedPackage.price}
        />
    </section>
  );
};
