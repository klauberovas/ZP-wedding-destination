import './style.css';
import instagramIcon from './img/instagram.svg';
import facebookIcon from './img/facebook.svg';
import mailIcon from './img/mail.svg';

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
          <img src={instagramIcon} alt="Instagram icon"></img>
        </a>
        <a href="https://www.gmail.com">
          <img src={mailIcon} alt="G-mail icon"></img>
        </a>
        <a href="https://www.facebook.com">
          <img src={facebookIcon} alt="Facebook icon"></img>
        </a>
      </div>
      <div className="footer__text">@2023 LAUBER DESTINATION WEDDING </div>
    </footer>
  );
};
