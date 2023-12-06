import { useState } from 'react';
//Import component
import { ButtonBack } from '../../components/ButtonBack';
import { Title } from '../../components/Title';
import { ButtonUp } from '../../components/ButtonUp';
import { Contact } from './components/Contact';
import { ContactForm } from './components/ContactForm';

export const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <>
      <ButtonBack />
      <main>
        <Title label="Kontakt" />
        <Contact />
        <Title label="Kontaktní formulář" />
        <ContactForm onFormSubmit={handleFormSubmit} />
        <ButtonUp />
      </main>
    </>
  );
};
