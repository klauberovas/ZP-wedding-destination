import './style.css';
import { useForm, FormProvider } from 'react-hook-form';
import { useState, useEffect } from 'react';
//import komponent
import { SelectInput } from './components/SelectInput';
import { Input } from '../../../../components/Input';
import { RadioInput } from './components/RadioInput';
import { RadioInputDown } from './components/RadioInputDown';
import { CheckboxWithImg } from './components/CheckboxWithImg';
import { Checkbox } from './components/Checkbox';
import { ErrorMessage } from '../../../../components/ErrorMessage';
import { Button } from '../../../../components/Button';
import { FormSummary } from './components/FormSummary';
import { PackageInfo } from './components/PackageInfo';
import { PriceIndicator } from './components/PriceIndicator';
import { InputDate } from './components/InputDate';
//import dat
import {
  listDestinations,
  listCeremony,
  listPackage,
  listServices,
  listPlaces,
  listLight,
  listDeluxe,
  listPremium,
  packageDeluxe,
  packagePremium,
} from './data';
//import fce
import { calculatePrice } from './calculatePrice';

export const Form = ({ onFormSubmit }) => {
  //obsah aktuálního balíčku
  const [currentPackage, setCurrentPackage] = useState(listLight);

  // načtení dat po submitu
  const [showUserData, setShowUserData] = useState(false);

  //defaultní hodnoty ve formu
  const methods = useForm({
    defaultValues: { ceremony: 'Symbolický obřad', package: 'Balíček Light' },
  });

  const watch = methods.watch();
  const errors = methods.formState.errors;

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

    if (watch.package === 'Balíček Light') {
      setCurrentPackage(listLight);
    }
    if (watch.package === 'Balíček Delux') {
      setCurrentPackage(listDeluxe);
    }
    if (watch.package === 'Balíček Premium') {
      return setCurrentPackage(listPremium);
    }
  }, [watch.package]);

  //přepisuje cenu
  useEffect(() => {
    const price = calculatePrice(watch);
    setTotalPrice(price);
  }, [watch]);

  //fce onSubmit
  const onSubmit = () => {
    setShowUserData(true);
    onFormSubmit();
  };

  return (
    <FormProvider {...methods}>
      {showUserData ? (
        <>
          <FormSummary price={totalPrice} />
        </>
      ) : (
        <form
          className="wedding-calculate"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <PriceIndicator totalPrice={totalPrice} />

          <div className="wedding-calculate__inputs wedding-calculate__field">
            <SelectInput
              data={listDestinations}
              label="Destinace *"
              name="destination"
            />
            <InputDate />
          </div>

          <h3 className="wedding-calculate__title">Typ obřadu</h3>
          <div className="wedding-calculate__ceremony wedding-calculate__field">
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
          <div className="wedding-calculate__packages wedding-calculate__field">
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
          <PackageInfo currentPackage={currentPackage} />

          <h3 className="wedding-calculate__title">Doplňkové služby</h3>
          <div className="wedding-calculate__services wedding-calculate__field">
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
                    disabled={isInPackage(value)}
                  />
                );
              }
            })}
          </div>

          <h3 className="wedding-calculate__title">
            Místo svatebního obřadu *
          </h3>
          {errors.place && (
            <ErrorMessage text={'*Vyberte jednu z možností'} center={true} />
          )}
          <div className="wedding-calculate__place wedding-calculate__field">
            {listPlaces.map(({ name, type }, index) => (
              <RadioInputDown
                key={index}
                label={name}
                name={type}
                value={name}
              />
            ))}
          </div>

          <h3 className="wedding-calculate__title">Cestujete s dětmi? *</h3>
          {errors.children && (
            <ErrorMessage text={'*Vyberte jednu z možností'} center={true} />
          )}
          <div className="wedding-calculate__question wedding-calculate__field">
            <RadioInputDown label="Ano" name="children" value="Ano" />
            <RadioInputDown label="Ne" name="children" value="Ne" />
          </div>

          <div className="wedding-calculate__info">
            <p>*Odhad kalkulačky je pouze orientační.</p>
            <p>
              **Celková cena je uvedena za jeden den včetně svatebního balíčku.
              Pro výpočet kompletní ceny zájezdu prosím odešlete kontaktní
              formulář.
            </p>
          </div>
          <h3>Kontaktní formulář</h3>
          <div className="contact-form">
            <div className="contact-form__fields">
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
                label="Telefon *"
                name="phoneNumber"
                type="tel"
                pattern="[0-9]{9}"
              />
              <Input
                className="contact-label"
                label="Email *"
                name="email"
                type="email"
              />{' '}
              <Input
                label="Počet hostů *"
                type="number"
                name="guests"
                min="0"
              />
              <Input label="Počet nocí *" type="number" name="nights" min="0" />
            </div>
          </div>
          <Checkbox
            name="agree"
            text="Souhlasím se zpracováním osobních údajů *"
            required={true}
          />
          <Checkbox name="sendEmail" text="Přeji si poslat potvrzení emailem" />

          <section>
            <Button label="Mám zájem o tento balíček" />
          </section>
        </form>
      )}
    </FormProvider>
  );
};
