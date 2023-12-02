import './style.css';
import { useState, useEffect } from 'react';
//import komponent
import { SelectInput } from './components/SelectInput';
import { Input } from './components/Input';
import { RadioInput } from './components/RadioInput';
import { RadioInputDown } from './components/RadioInputDown';
import { Checkbox } from './components/Checkbox';
import { calculatePrice } from './calculatePrice';
//import dat
import {
  listDestinations,
  listCeremony,
  listPackage,
  listServices,
  listPlaces,
  packageDeluxe,
  packagePremium,
} from './data';

export const Form = () => {
  const [userData, setUserData] = useState({
    destination: '',
    guests: '',
    nights: '',
    date: '',
    ceremony: 'Symbolický obřad',
    package: '',
    services: [],
    place: '',
    children: '',
  });

  const [packageType, setPackageType] = useState('Balíček Light');

  const [totalPrice, setTotalPrice] = useState(0);

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

  const isInPackage = (value) => {
    if (packageType === 'Balíček Delux' && packageDeluxe.includes(value)) {
      return true;
    }
    if (packageType === 'Balíček Premium' && packagePremium.includes(value)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    console.log(packageType);
    console.log(userData);

    const price = calculatePrice(userData, packageType);
    setTotalPrice(price);
  }, [userData, packageType]);

  useEffect(() => {
    userData.services = [];

    const price = calculatePrice(userData, packageType);
    setTotalPrice(price);
  }, [packageType]);

  return (
    <form className="wedding-calculate">
      <div className="wedding-price_display">
        <div className="price-total">{totalPrice}</div>
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
        {listCeremony.map(({ name, photo, type, price }, index) => (
          <RadioInput
            key={index}
            label={name}
            image={photo}
            price={price}
            name={type}
            value={name}
            onSelect={handleInputChange}
            checked={name === userData.ceremony}
          />
        ))}
      </div>

      <h3 className="wedding-calculate__title">Typ svatebního balíčku</h3>
      <div className="wedding-calculate__packages">
        {listPackage.map(({ name, photo, type, price }, index) => (
          <RadioInput
            key={index}
            label={name}
            image={photo}
            price={price}
            name={type}
            value={name}
            checked={packageType === name}
            onSelect={() => setPackageType(name)}
          />
        ))}
      </div>

      <h3 className="wedding-calculate__title">Doplňkové služby</h3>
      <div className="wedding-calculate__services">
        {listServices.map(({ photo, id, value, label, price }) => {
          {
            return (
              <Checkbox
                key={id}
                label={label}
                image={photo}
                name="services"
                value={value}
                price={price}
                onSelect={handleInputListChange}
                checked={
                  userData.services.includes(value) || isInPackage(value)
                }
                disabled={isInPackage(value)}
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
