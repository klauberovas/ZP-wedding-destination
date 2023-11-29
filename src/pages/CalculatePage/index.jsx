import { ButtonBack } from '../../components/ButtonBack';
import { Title } from '../../components/Title';
import { ButtonUp } from '../../components/ButtonUp';
import { SelectInput } from './components/SelectInput';
import { Input } from './components/Input';
import { RadioInput } from './components/RadioInput';
import './style.css';
import official from './img/official.jpg'
import symbolic from './img/symbolic.jpg'
import light from './img/light.jpg'
import deluxe from './img/deluxe.jpg'
import premium from './img/premium.jpg'

export const CalculatePage = () => {
  return (
    <>
      <ButtonBack />
      <main>
        <Title label="Svatební kalkulačka" />
        <form className="wedding-calculate">
          <SelectInput
            data={['Maledivy', 'Dominikánská republika', 'Mauricus']}
            label="Destinace"
          />
          <Input label="Počet hostů" type="number" />
          <Input label="Počet nocí" type="number" />
          <Input label="Odlet nejdříve" type="date" />
        </form>
        <h3>Typ obřadu</h3>
        <div className="wedding-ceremony">
        <RadioInput label="oficiální" image={official}/>
        <RadioInput label="symbolický" image={symbolic}/>
        </div>
        <h3>Typ svatebního obřadu</h3>
        <div className="wedding-package">
        <RadioInput label="Balíček Light" image={light}/>
        <RadioInput label="Balíček Delux" image={deluxe}/>
        <RadioInput label="Balíček Premium" image=
        {premium}/>
        </div>
        <ButtonUp />
      </main>
    </>
  );
};
