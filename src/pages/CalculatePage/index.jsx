import { ButtonBack } from '../../components/ButtonBack';
import { Title } from '../../components/Title';
import { ButtonUp } from '../../components/ButtonUp';
import { SelectInput } from './components/SelectInput';
import { Input } from './components/Input';
import './style.css';

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
        <ButtonUp />
      </main>
    </>
  );
};
