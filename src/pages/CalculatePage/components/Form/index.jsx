import './style.css';
import { useState, useEffect } from 'react';
//import komponent
import { SelectInput } from './components/SelectInput';
import { Input } from './components/Input';
import { RadioInput } from './components/RadioInput';
import { RadioInputDown } from './components/RadioInputDown';
import { Checkbox } from './components/Checkbox';
//import obřad
import official from './img/official.jpg';
import symbolic from './img/symbolic.jpg';
//import balíčků
import light from './img/light.jpg';
import deluxe from './img/deluxe.jpg';
import premium from './img/premium.jpg';
//import služeb
import flowers from './img/decoration.jpg';
import cake from './img/cake.jpg';
import photograph from './img/photograph.jpg';
import dj from './img/dj.jpg';
import dinner from './img/dinner.jpg';
import church from './img/church.jpg';
import celebrate from './img/celebrate.jpg';
import firework from './img/firework.jpg';
import makeup from './img/makeup.jpg';
import cruise from './img/cruise.jpg';
import flight from './img/flight.jpg';

export const Form = () => {
  const listDestinations = [
    { name: 'Maledivy' },
    { name: 'Mauricius' },
    { name: 'Dominikánská republika' },
  ];

  const listCeremony = [
    {
      name: 'Oficiální obřad',
      photo: official,
      type: 'ceremony',
      price: 17000,
    },
    {
      name: 'Symbolický obřad',
      type: 'ceremony',
      photo: symbolic,
      price: 2000,
    },
  ];

  const listPackage = [
    {
      name: 'Balíček Light',
      type: 'package',
      photo: light,
      price: 20000,
    },
    {
      name: 'Balíček Delux',
      type: 'package',
      photo: deluxe,
      price: 30000,
    },
    {
      name: 'Balíček Premium',
      type: 'package',
      photo: premium,
      price: 45000,
    },
  ];

  const listServices = [
    {
      id: 0,
      label: 'Květinová výzdoba, svatební oblouk a kytice pro nevěstu',
      value: 'flowers',
      photo: flowers,
      price: 1500,
    },
    {
      id: 1,
      label: 'Svatební dort (1-20)',
      value: 'cake',
      photo: cake,
      price: 1500,
    },
    {
      id: 2,
      label: 'Fotograf',
      value: 'photograph',
      photo: photograph,
      price: 1500,
    },
    {
      id: 3,
      label: 'Živá hudba / DJ',
      value: 'music',
      photo: dj,
      price: 1500,
    },
    {
      id: 4,
      label: 'Romantická večeře',
      value: 'romanticDinner',
      photo: dinner,
      price: 1500,
    },
    {
      id: 5,
      label: 'Církevní obřad',
      value: 'churchCeremony',
      photo: church,
      price: 1500,
    },
    {
      id: 6,
      label: 'Občerstvení a nápoje',
      value: 'foodAndDrinks',
      photo: celebrate,
      price: 1500,
    },
    {
      id: 7,
      label: 'Ohňostroj',
      value: 'fireworks',
      photo: firework,
      price: 1500,
    },
    {
      id: 8,
      label: 'Svatební účes a makeup pro nevěstu',
      value: 'makeup',
      photo: makeup,
      price: 1500,
    },
    {
      id: 9,
      label: 'Plavba při západu slunce',
      value: 'cruise',
      photo: cruise,
      price: 1500,
    },
    {
      id: 10,
      label: 'Vyhlídkový let',
      value: 'flight',
      photo: flight,
      price: 1500,
    },
  ];

  const listPlaces = [
    {
      name: 'Pláž',
      type: 'place',
    },
    {
      name: 'Zahrada',
      type: 'place',
    },
    {
      name: 'Terasa',
      type: 'place',
    },
    {
      name: 'Kaple',
      type: 'place',
    },
  ];

  const packageDeluxe = ['flowers', 'cake', 'photograph', 'music'];

  const packagePremium = [
    ...packageDeluxe,
    'romanticDinner',
    'churchCeremony',
    'foodAndDrinks',
    'fireworks',
    'makeup',
    'cruise',
  ];

  const [userData, setUserData] = useState({
    destination: '',
    guests: '',
    nights: '',
    date: '',
    ceremony: '',
    package: '',
    services: [],
    place: '',
    children: '',
  });

  const [packageType, setPackageType] = useState('Balíček Light');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputListChange = (e) => {
    const { name, value, checked } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: checked
        ? [...prevState[name], value]
        : // vyfiltruje jen ty co se nerovnají value
          prevState[name].filter((item) => item !== value),
    }));
  };

  useEffect(() => {
    console.log(userData);
    console.log(packageType);
  }, [userData, packageType]);

  /*
  const [visibleItems, setVisibleItems] = useState([])

  const handlePackageItems = () => {
    resetSelectedItems();
  
    let checkPackage = [];
  
    switch (listServices) {
      case 'light':
        checkPackage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        break;
      case 'deluxe':
        checkPackage = [4, 5, 6, 7, 8, 9, 10];
        break;
      case 'premium':
        checkPackage = [9, 10];
        break;
      default:
        checkPackage = [];
    }
    setVisibleItems(checkPackage);
  };

  const resetSelectedItems = () => {
    setListServices((prevData) =>
      prevData.map((item) => ({ ...item, checked: false }))
    );
  };

  useEffect(() => {
    handlePackageItems();
  }, [listServices]);
*/

  return (
    <form className="wedding-calculate">
      <div className="wedding-price_display">
        <div className="price-total">0 Kč</div>
      </div>
      <div className="wedding-calculate__inputs">
        <SelectInput
          data={listDestinations}
          label="Destinace"
          name="destination"
          value={userData.destination}
          onSelect={handleInputChange}
        />
        <Input
          label="Počet hostů"
          type="number"
          name="guests"
          value={userData.guests}
          onSelect={handleInputChange}
        />
        <Input
          label="Počet nocí"
          type="number"
          name="nights"
          value={userData.nights}
          onSelect={handleInputChange}
        />
        <Input
          label="Odlet nejdříve"
          type="date"
          name="date"
          value={userData.date}
          onSelect={handleInputChange}
        />
      </div>

      <h3 className="wedding-calculate__title">Typ obřadu</h3>
      <div className="wedding-calculate__ceremony">
        {listCeremony.map(({ name, photo, type }, index) => (
          <RadioInput
            key={index}
            label={name}
            image={photo}
            name={type}
            value={name}
            onSelect={handleInputChange}
          />
        ))}
      </div>

      <h3 className="wedding-calculate__title">Typ svatebního balíčku</h3>
      <div className="wedding-calculate__packages">
        {listPackage.map(({ name, photo, type }, index) => (
          <RadioInput
            key={index}
            label={name}
            image={photo}
            name={type}
            value={name}
            checked={packageType === name}
            onSelect={() => setPackageType(name)}
          />
        ))}
      </div>

      <h3 className="wedding-calculate__title">Doplňkové služby</h3>
      <div className="wedding-calculate__services">
        {listServices.map(({ photo, id, value, label }) => {
          if (
            (packageType === 'Balíček Delux' &&
              !packageDeluxe.includes(value)) ||
            (packageType === 'Balíček Premium' &&
              !packagePremium.includes(value)) ||
            packageType === 'Balíček Light'
          ) {
            return (
              <Checkbox
                key={id}
                label={label}
                image={photo}
                name="services"
                value={value}
                onSelect={handleInputListChange}
                checked={userData.services.includes(value)}
              />
            );
          }
        })}
      </div>

      <h3 className="wedding-calculate__title">Místo svatebního obřadu</h3>
      <div className="wedding-calculate__place">
        {listPlaces.map(({ name, type }, index) => (
          <RadioInputDown
            key={index}
            label={name}
            name={type}
            value={name}
            onSelect={handleInputChange}
          />
        ))}
      </div>

      <h3 className="wedding-calculate__title">Cestujete s dětmi</h3>
      <div className="wedding-calculate__question">
        <RadioInputDown
          label="Ano"
          name="children"
          value="Ano"
          onSelect={handleInputChange}
        />
        <RadioInputDown
          label="Ne"
          name="children"
          value="Ne"
          onSelect={handleInputChange}
        />
      </div>
    </form>
  );
};
