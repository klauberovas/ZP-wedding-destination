import './style.css';
import { useForm, FormProvider } from 'react-hook-form';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import { TextArea } from './components/TextArea';
import { useEffect, useState } from 'react';
import { Title } from '../../../../components/Title';
import { ContactSummary } from './components/TextArea/ContactSummary';

export const ContactForm = ({ onFormSubmit }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const methods = useForm({});

  const watch = methods.watch();

  //kontrola sběru dat
  useEffect(() => {
    console.log(watch);
  }, [watch]);

  const onSubmit = (data) => {
    onFormSubmit();
    setFormSubmitted(true);
  };

  return (
    <FormProvider {...methods}>
      {formSubmitted ? (
      <ContactSummary />
      ) : (
        <>
         <section>
        <Title label="Kontaktní formulář" />
        <form
          className="contact-form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="contact-form__fields">
            <Input
              className="contact-form__input"
              label="Jméno *"
              name="name"
              type="text"
            />
            <Input
              className="contact-form__input"
              label="Příjmení *"
              name="lastname"
              type="text"
            />
            <Input
              className="contact-form__input"
              label="Telefon *"
              name="phoneNumber"
              type="tel"
              pattern="[0-9]{9}"
            />
            <Input
              className="contact-form__input"
              label="Email *"
              name="email"
              type="email"
            />
            <TextArea />
          </div>
          <Button label="Odeslat" />
        </form>
      </section>
      </>
      )}
    </FormProvider>
  );
};
