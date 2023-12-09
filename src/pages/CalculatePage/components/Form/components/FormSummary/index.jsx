import './style.css';
import { listServices } from './../../data';
import { useFormContext } from 'react-hook-form';
export const FormSummary = ({ price }) => {
  const methods = useFormContext();
  const watch = methods.watch();

  const reloadPage = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  const selectedServices = watch.services
    ? watch.services.map((service) => {
        const serviceData = listServices.find((s) => s.value === service);
        return serviceData
          ? `${serviceData.label} (${serviceData.price} Kč)`
          : '';
      })
    : [];

  const showServicesSection = selectedServices.length > 0;

  return (
    <div className="message-container">
      <h2 className="message-title">Rekapitulace formuláře</h2>
      <p>Děkujeme za vyplnění formuláře!</p>
      <p>
        V následujících dnech Vás bude kontaktovat náš agent s nabídkou zájezdů
        dle vámi zadaných informací.
      </p>
      <div className="message">
        <p>Typ obřadu: {watch.ceremony}</p>
        <p>Balíček: {watch.package}</p>
        <p>Destinace: {watch.destination}</p>
        {showServicesSection && (
          <>
            <p>Doplňkové služby: </p>
            <ul>
              {selectedServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </>
        )}

        <p>
          Celková cena: <span className="message__price">{price} </span>
        </p>

        <div className="message__details">
          <h4>Doplňující informace:</h4>
          <p>Datum odletu: {watch.date.toLocaleDateString()}</p>
          <p>Místo obřadu: {watch.place}</p>
          <p>Cestujete s dětmi: {watch.children}</p>
          <p>Jméno: {watch.name}</p>
          <p>Příjmení: {watch.lastname}</p>
          <p>Telefon: {watch.phoneNumber}</p>
          <p>Email: {watch.email}</p>
          <p>Počet hostů: {watch.guests}</p>
          <p>Počet nocí: {watch.nights}</p>
          <p>
            Souhlasím se zpracováním osobních údajů:{' '}
            {watch.agree ? 'Ano' : 'Ne'}
          </p>
          <p>
            Přeji si poslat potvrzení emailem: {watch.sendEmail ? 'Ano' : 'Ne'}
          </p>
        </div>

        <div className="button-formSummary-container">
          <button
            className="button-formSummary"
            onClick={reloadPage}
            type="submit"
          >
            Vrátit zpět
          </button>
        </div>
      </div>
    </div>
  );
};
