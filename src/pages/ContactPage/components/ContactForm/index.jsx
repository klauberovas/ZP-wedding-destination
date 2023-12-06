import './style.css';
import { useForm, FormProvider } from 'react-hook-form';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';

export const ContactForm = ({ onFormSubmit }) => {
  const methods = useForm({});

  const watch = methods.watch();

  const onSubmit = (data) => {
    onFormSubmit();
  };

  return (
    <FormProvider {...methods}>
      <div className="contact-form">
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

        <section>
          <Button label="Odeslat" />
        </section>
      </div>
    </FormProvider>
  );
};
