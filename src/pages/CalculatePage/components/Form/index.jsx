import './style.css';
import { useForm, FormProvider } from 'react-hook-form';
import { useState, useEffect } from 'react';
//import komponent
import { SelectInput } from './components/SelectInput';
import { Input } from './components/Input';
import { RadioInput } from './components/RadioInput';
import { RadioInputDown } from './components/RadioInputDown';
import { CheckboxWithImg } from './components/CheckboxWithImg';
import { Checkbox } from './components/Checkbox';
import { calculatePrice } from './calculatePrice';
import { Button } from '../../../../components/Button';
//import dat
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
  const [userData, setUserData] = useState();
  //defaultní hodnoty ve formu
  const methods = useForm({
    defaultValues: { ceremony: 'Symbolický obřad', package: 'Balíček Light' },
  });
  const errors = methods.formState.errors;
  const watch = methods.watch();

  const [totalPrice, setTotalPrice] = useState(0);

  //vypisuje co je v balíčku
  const isInPackage = (value) => {
    if (watch.package === 'Balíček Delux' && packageDeluxe.includes(value)) {
      return true;
    }
    if (watch.package === 'Balíček Premium' && packagePremium.includes(value)) {
      return true;
    }
    return false;
  };

  //vyresetuje services
  useEffect(() => {
    methods.resetField('services');
  }, [watch.package]);

  //přepisuje cenu
  useEffect(() => {
    console.log(watch);

    const price = calculatePrice(watch);
    setTotalPrice(price);
  }, [watch]);

  useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      console.log(userData);
      methods.reset();
    }
  }, [methods.formState, methods.reset]);

  //fce onSubmit -vypíše obsah políček
  const onSubmit = (data) => setUserData(data);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="wedding-calculate"
      >
        {/* Ukazatel ceny */}
        <div className="wedding-price_display">
          <div className="price-total">{totalPrice}</div>
        </div>

        <div className="wedding-calculate__inputs">
          <SelectInput
            data={listDestinations}
            label="Destinace *"
            name="destination"
          />
          {/* <Input label="Počet hostů *" type="number" name="guests" min="0" /> */}
          {/* <Input label="Počet nocí *" type="number" name="nights" min="0" /> */}

          <Input label="Odlet nejdříve *" type="date" name="date" />
        </div>

        <h3 className="wedding-calculate__title">Typ obřadu</h3>
        <div className="wedding-calculate__ceremony">
          {listCeremony.map(({ name, photo, type, price }, index) => (
            <RadioInput
              key={index}
              label={name}
              image={photo}
              price={price}
              name={type}
              value={name}
            />
          ))}
        </div>

        <h3 className="wedding-calculate__title">Typ svatebního balíčku</h3>
        <div className="wedding-calculate__packages">
          {listPackage.map(({ name, photo, type, price }, index) => (
            <RadioInput
              key={index}
              label={name}
              image={photo}
              price={price}
              name={type}
              value={name}
            />
          ))}
        </div>

        <h3 className="wedding-calculate__title">Doplňkové služby</h3>
        <div className="wedding-calculate__services">
          {listServices.map(({ photo, id, value, label, price }) => {
            {
              if (isInPackage(value)) {
                return null;
              }
              return (
                <CheckboxWithImg
                  key={id}
                  label={label}
                  image={photo}
                  name="services"
                  value={value}
                  price={price}
                  // checked={
                  //   userData.services.includes(value) || isInPackage(value)
                  // }
                  disabled={isInPackage(value)}
                />
              );
            }
          })}
        </div>

        <h3 className="wedding-calculate__title">Místo svatebního obřadu *</h3>
        <div className="wedding-calculate__place">
          {listPlaces.map(({ name, type }, index) => (
            <RadioInputDown key={index} label={name} name={type} value={name} />
          ))}
        </div>

        <h3 className="wedding-calculate__title">Cestujete s dětmi? *</h3>
        <div className="wedding-calculate__question">
          <RadioInputDown label="Ano" name="children" value="Ano" />
          <RadioInputDown label="Ne" name="children" value="Ne" />
        </div>

        <h3>Kontakt</h3>
        <div className="wedding-contact">
          <div className="wedding-contact__inputs">
            <Input
              className="contact-label"
              label="Jméno *"
              name="name"
              type="text"
            />
            <Input
              className="contact-label"
              label="Příjmení *"
              name="lastname"
              type="text"
            />
            <Input
              className="contact-label"
              label="Telefon"
              name="phoneNumber"
              type="tel"
              pattern="[0-9]{9}"
            />
            <Input
              className="contact-label"
              label="Email *"
              name="email"
              type="email"
            />
          </div>
        </div>
        <Checkbox
          name="agree"
          text="Souhlasím se zpracováním osobních údajů *"
          required={true}
        />
        <Checkbox name="sendEmail" text="Přeji si poslat potvrzení emailem" />

        <Button label="Mám zájem o tento balíček" />
      </form>
    </FormProvider>
  );
};
