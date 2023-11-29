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
  const [data, setData] = useState([
    {
      id: 0,
      label:
        'Květinová výzdoba, včetně svatebního oblouku a kytice pro nevěstu',
      photo: flowers,
      name: '',
      price: 1500,
      checked: false,
    },
    {
      id: 1,
      label: 'Svatební dort (1-20)',
      photo: cake,
      name: '',
      price: 1500,
      checked: false,
    },
    {
      id: 2,
      label: 'Fotograf',
      photo: photograph,
      name: '',
      price: 1500,
      checked: false,
    },
    {
      id: 3,
      label: 'Živá hudba / DJ',
      photo: dj,
      name: '',
      price: 1500,
      checked: false,
    },
    {
      id: 4,
      label: 'Romantická večeře',
      photo: dinner,
      name: '',
      price: 1500,
      checked: false,
    },
    {
      id: 5,
      label: 'Církevní obřad',
      photo: church,
      name: '',
      price: 1500,
      checked: false,
    },
    {
      id: 6,
      label: 'Občerstvení a nápoje',
      photo: celebrate,
      name: '',
      price: 1500,
      checked: false,
    },
    {
      id: 7,
      label: 'Ohňostroj',
      photo: firework,
      name: '',
      price: 1500,
      checked: false,
    },
    {
      id: 8,
      label: 'Svatební účes a makeup pro nevěstu',
      photo: makeup,
      name: '',
      price: 1500,
      checked: false,
    },
    {
      id: 9,
      label: 'Plavba přo západu slunce',
      photo: cruise,
      name: '',
      price: 1500,
      checked: false,
    },
    {
      id: 10,
      label: 'Vyhlídkový let',
      photo: flight,
      name: '',
      price: 1500,
      checked: false,
    },
  ]);

  return (
    <form className="wedding-calculate">
      <div className="wedding-price_display">
        <div className="price-total">0 Kč</div>
      </div>
      <div className="wedding-calculate__inputs">
        <SelectInput
          data={['Maledivy', 'Dominikánská republika', 'Mauricus']}
          label="Destinace"
        />
        <Input label="Počet hostů" type="number" />
        <Input label="Počet nocí" type="number" />
        <Input label="Odlet nejdříve" type="date" />
      </div>

      <h3 className="wedding-calculate__title">Typ obřadu</h3>
      <div className="wedding-calculate__ceremony">
        <RadioInput label="oficiální" image={official} />
        <RadioInput label="symbolický" image={symbolic} />
      </div>

      <h3 className="wedding-calculate__title">Typ svatebního obřadu</h3>
      <div className="wedding-calculate__packages">
        <RadioInput label="Balíček Light" image={light} />
        <RadioInput label="Balíček Delux" image={deluxe} />
        <RadioInput label="Balíček Premium" image={premium} />
      </div>

      <h3 className="wedding-calculate__title">Doplňkové služby</h3>
      <div className="wedding-calculate__services">
        {data.map(({ label, photo, id }) => (
          <Checkbox key={id} label={label} image={photo} />
        ))}
      </div>

      <h3 className="wedding-calculate__title">Místo svatebního obřadu</h3>
      <div className="wedding-calculate__place">
        <RadioInputDown label="Pláž" />
        <RadioInputDown label="Zahrada" />
        <RadioInputDown label="Terasa" />
        <RadioInputDown label="Kaple" />
      </div>

      <h3 className="wedding-calculate__title">Cestujete s dětmi</h3>
      <div className="wedding-calculate__question">
        <RadioInputDown label="Ano" />
        <RadioInputDown label="Ne" />
      </div>
    </form>
  );
};
