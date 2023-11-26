import { ButtonBack } from '../../components/ButtonBack';
import { Title } from '../../components/Title';
import { ButtonUp } from '../../components/ButtonUp';

export const CalculatePage = () => {
  return (
    <>
      <ButtonBack />
      <main>
        <Title label="Svatební kalkulačka" />
        <ButtonUp />
      </main>
    </>
  );
};
