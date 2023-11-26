import './style.css';
import { Destination } from './Destination';
import { Button } from './../../../../components/Button';
import { Title } from './../../../../components/Title';
import { dataDestination } from './DataDestination';
import maledivy from './DataDestination/destination-pic1.jpg';
import dominikana from './DataDestination/destination-pic2.jpg';
import mauricius from './DataDestination/destination-pic3.jpg';

export const Destinations = () => {
  return (
    <section id="destination">
      <Title label="TOP destinace" />
      <div className="container-destination">
        {dataDestination.map((destination) => {
          let photo;
          switch (destination.id) {
            case 0:
              photo = maledivy;
              break;
            case 1:
              photo = dominikana;
              break;
            case 2:
              photo = mauricius;
              break;
            default:
              photo = null;
          }

          return (
            <Destination
              key={destination.id}
              title={destination.title}
              photo={photo}
              description={destination.description}
            />
          );
        })}
      </div>
      <div className="destination-button">
        <p>Podívejte se na naše nejžádanější zájezdy</p>
        <Button label="Svatební zájezdy" url="/package" />
      </div>
    </section>
  );
};
