import { MapPinned, Mail, Phone, Clock2 } from 'lucide-react';
import './style.css';
import { Title } from '../../../../components/Title';

export const Contact = () => {
  return (
    <section className="section--margin-top">
      <Title label="Kontakt" />
      <div className="contact-container">
        <div className="contact-icons">
          <div className="contact-adress contact-icon">
            <MapPinned />
            <p>
              Vyšehradská 555/2 <br />
              Praha 3, 350 00
            </p>
          </div>
          <div className="contact-mail contact-icon">
            <Mail />
            <p>lauber@gmail.com</p>
          </div>
          <div className="contact-phone contact-icon">
            <Phone />
            <p>
              +420 777 111 777 Plzeň <br />
              +420 722 085 228 Praha
            </p>
          </div>
          <div className="contact-hours contact-icon">
            <Clock2 />
            <p>Pondělí až pátek 9 - 17h</p>
          </div>
        </div>
        <div className="contact-map corner--left"></div>
      </div>
    </section>
  );
};
