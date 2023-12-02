import './style.css';
import { useState, useEffect } from 'react';
//import komponent
import { SelectInput } from './components/SelectInput';
import { Input } from './components/Input';
import { RadioInput } from './components/RadioInput';
import { RadioInputDown } from './components/RadioInputDown';
import { Checkbox } from './components/Checkbox';
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
    ceremony: '',
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

  const calculatePrice = () => {
    let totalPrice = 0;
    if (
      userData.destination !== '' &&
      userData.nights !== '' &&
      userData.guests !== ''
    ) {
      let destinationPrice = listDestinations.find(
        (item) => item.name === userData.destination,
      ).price;
      totalPrice +=
        destinationPrice * Number(userData.nights) * Number(userData.guests);
    }

    if (userData.ceremony !== '') {
      let ceremonyPrice = listCeremony.find(
        (item) => item.name === userData.ceremony,
      ).price;
      totalPrice += ceremonyPrice;
    }

    if (packageType !== '') {
      let packagePrice = listPackage.find(
        (item) => item.name === packageType,
      ).price;
      totalPrice += packagePrice;
    }

    if (userData.services.length !== 0) {
      userData.services.forEach((service) => {
        let servicePrice = listServices.find(
          (item) => item.value === service,
        ).price;
        totalPrice += servicePrice;
      });
    }

    const price = new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      minimumFractionDigits: 0,
    }).format(totalPrice);

    setTotalPrice(price);
  };

  useEffect(() => {
    console.log(packageType);
    console.log(userData);

    calculatePrice();
  }, [userData, packageType]);

  useEffect(() => {
    userData.services = [];
    calculatePrice();
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
          {
            return (
              <Checkbox
                key={id}
                label={label}
                image={photo}
                name="services"
                value={value}
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
