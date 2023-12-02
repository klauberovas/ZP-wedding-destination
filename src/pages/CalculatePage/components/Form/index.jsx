import './style.css';
import { useState } from 'react';
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
      name: 'Květinová výzdoba, svatební oblouk a kytice pro nevěstu',
      photo: flowers,
      price: 1500,
      checked: false,
    },
    {
      id: 1,
      name: 'Svatební dort (1-20)',
      photo: cake,
      price: 1500,
      checked: false,
    },
    {
      id: 2,
      name: 'Fotograf',
      photo: photograph,
      price: 1500,
      checked: false,
    },
    {
      id: 3,
      name: 'Živá hudba / DJ',
      photo: dj,
      price: 1500,
      checked: false,
    },
    {
      id: 4,
      name: 'Romantická večeře',
      photo: dinner,
      price: 1500,
      checked: false,
    },
    {
      id: 5,
      name: 'Církevní obřad',
      photo: church,
      price: 1500,
      checked: false,
    },
    {
      id: 6,
      name: 'Občerstvení a nápoje',
      photo: celebrate,
      price: 1500,
      checked: false,
    },
    {
      id: 7,
      name: 'Ohňostroj',
      photo: firework,
      price: 1500,
      checked: false,
    },
    {
      id: 8,
      name: 'Svatební účes a makeup pro nevěstu',
      photo: makeup,
      price: 1500,
      checked: false,
    },
    {
      id: 9,
      name: 'Plavba přo západu slunce',
      photo: cruise,
      price: 1500,
      checked: false,
    },
    {
      id: 10,
      name: 'Vyhlídkový let',
      photo: flight,
      price: 1500,
      checked: false,
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
        />
        <Input label="Počet hostů" type="number" />
        <Input label="Počet nocí" type="number" />
        <Input label="Odlet nejdříve" type="date" />
      </div>

      <h3 className="wedding-calculate__title">Typ obřadu</h3>
      <div className="wedding-calculate__ceremony">
        {listCeremony.map(({ name, photo, type }, index) => (
          <RadioInput key={index} label={name} image={photo} name={type} />
        ))}
      </div>

      <h3 className="wedding-calculate__title">Typ svatebního balíčku</h3>
      <div className="wedding-calculate__packages">
        {listPackage.map(({ name, photo, type }, index) => (
          <RadioInput key={index} label={name} image={photo} name={type} />
        ))}
        <RadioInput label="Balíček Light" image={light} />
        <RadioInput label="Balíček Delux" image={deluxe} />
        <RadioInput label="Balíček Premium" image={premium} />
      </div>

      <h3 className="wedding-calculate__title">Doplňkové služby</h3>
      <div className="wedding-calculate__services">
        {listServices.map(({ label, photo, id }) => (
          <Checkbox key={id} label={label} image={photo} />
        ))}
      </div>

      <h3 className="wedding-calculate__title">Místo svatebního obřadu</h3>
      <div className="wedding-calculate__place">
        {listPlaces.map(({ name, type }, index) => (
          <RadioInputDown key={index} label={name} name={type} value={name} />
        ))}
      </div>

      <h3 className="wedding-calculate__title">Cestujete s dětmi</h3>
      <div className="wedding-calculate__question">
        <RadioInputDown label="Ano" />
        <RadioInputDown label="Ne" />
      </div>
    </form>
  );
};
