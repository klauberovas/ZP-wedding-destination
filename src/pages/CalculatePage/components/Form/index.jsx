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
  const methods = useForm({
    defaultValues: { ceremony: 'Symbolický obřad', package: 'Balíček Light' },
  });

  const errors = methods.formState.errors;

  useEffect(() => {
    console.log(errors);
  });

  const [userData, setUserData] = useState({
    destination: '',
    guests: '',
    nights: '',
    date: '',
    ceremony: 'Symbolický obřad',
    package: 'Balíček Light',
    services: [],
    place: '',
    children: '',
    name: '',
    lastname: '',
    phoneNumber: '',
    email: '',
    typeOfContact: '',
    agree: false,
    sendEmail: false,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const isInPackage = (value) => {
    if (userData.package === 'Balíček Delux' && packageDeluxe.includes(value)) {
      return true;
    }
    if (
      userData.package === 'Balíček Premium' &&
      packagePremium.includes(value)
    ) {
      return true;
    }
    return false;
  };

  const resetServices = () => {
    setUserData((prevState) => ({
      ...prevState,
      services: [],
    }));
  };

  useEffect(() => {
    console.log(userData);

    const price = calculatePrice(userData);
    setTotalPrice(price);
  }, [userData]);

  //fce onSubmit
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="wedding-calculate"
      >
        <div className="wedding-price_display">
          <div className="price-total">{totalPrice}</div>
        </div>
        <div className="wedding-calculate__inputs">
          <SelectInput
            data={listDestinations}
            label="Destinace *"
            name="destination"
          />
          <Input label="Počet hostů *" type="number" name="guests" min="0" />
          <Input label="Počet nocí *" type="number" name="nights" min="0" />
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
