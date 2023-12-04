import { ButtonBack } from '../../components/ButtonBack';
import { Title } from '../../components/Title';
import { ButtonUp } from '../../components/ButtonUp';
import { Contact } from './Contact';

export const ContactPage = () => {
  return (
    <>
      <ButtonBack />
      <main>
        <Title label="Kontakt" />
        <Contact />
        <Title label="Kontaktní formulář" />
        <ButtonUp />
      </main>
    </>
  );
};
