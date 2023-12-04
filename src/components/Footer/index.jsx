import './style.css';
import { Facebook, Mail, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h3 className="footer__title">Kontaktujte nás</h3>
        <div className="footer__offices">
          <div className="footer__office">
            <p>Pobočka Praha</p>
            <p>+420 777 111 777</p>
          </div>
          <div className="footer__office">
            <p>Pobočka Plzeň</p>
            <p>+420 722 085 228</p>
          </div>
        </div>
      </div>
      <div className="footer__icons">
        <a href="https://www.instagram.com/">
          <Instagram size={40} strokeWidth={0.8} />
        </a>
        <a href="https://www.gmail.com">
          <Mail size={40} strokeWidth={0.8} />
        </a>
        <a href="https://www.facebook.com">
          <Facebook size={40} strokeWidth={0.8} />
        </a>
      </div>
      <div className="footer__text">@2023 LAUBER DESTINATION WEDDING </div>
    </footer>
  );
};
