import './style.css';
import { listServices } from './../../data';
export const FormSummary = ({ userData, price}) => {

  const reloadPage = () => {
    window.location.reload();
  };

  const selectedServices = userData.services.map((service) => {
    const serviceData = listServices.find((s) => s.value === service);
    return serviceData ? `${serviceData.label} (${serviceData.price} Kč)` : '';
  });


  return (
    <div className="message-container">
      <h2 className="message-title">Rekapitulace formuláře</h2>
      <p>Děkujeme za vyplnění formuláře!</p>
      <p>
        V následujících dnech Vás bude kontaktovat náš agent s nabídkou zájezdů
        dle vámi zadaných informací.
      </p>
      <div className="message">
        <p>Typ obřadu: {userData.ceremony}</p>
        <p>Balíček: {userData.package}</p>
        <p>Destinace: {userData.destination}</p>
        <p>Doplňkové služby:  <ul>
          {selectedServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul></p>
        <p>Datum odletu: {userData.date.toLocaleDateString()}</p>
        <p>Místo obřadu: {userData.place}</p>
        <p>Cestujete s dětmi: {userData.children}</p>
        <p>Jméno: {userData.name}</p>
        <p>Příjmení: {userData.lastname}</p>
        <p>Telefon: {userData.phoneNumber}</p>
        <p>Email: {userData.email}</p>
        <p>
          Souhlasím se zpracováním osobních údajů:{' '}
          {userData.agree ? 'Ano' : 'Ne'}
        </p>
        <p>
          Přeji si poslat potvrzení emailem: {userData.sendEmail ? 'Ano' : 'Ne'}
        </p>
        
        <p>Celková cena: {price}</p>
        <div className="button-formSummary-container">
        <button className="button-formSummary" onClick={reloadPage} type="submit" >Vrátit zpět</button>
        </div>
      </div>
    </div>
  );
};
