import './style.css';
import { CheckCheck } from 'lucide-react';
export const ContactSummary = () => {
 
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="message-container">
      <div className="message">
      <p className="check-check">Děkujeme za vyplnění formuláře <CheckCheck size={32} color="#4fc026" strokeWidth={3} /></p>
      <p>
        V následujících dnech Vás bude kontaktovat náš agent.
      </p>
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
