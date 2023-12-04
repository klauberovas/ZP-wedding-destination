import {MapPinned, Mail, Phone, Clock2} from 'lucide-react'
import "./style.css"

export const Contact = () => {
  return (
    <div className="contact-container">
   <div className="contact-icons">
    <div className="contact-adress">
    <MapPinned />
    <p>
     Vyšehradská 555/2 <br/>
     Praha 3,  350 00
     </p>
    </div>
    <div className="contact-mail">
   <Mail />
   <p>
    lauber@gmail.com
     </p>
   </div>
   <div className="contact-phone">
   <Phone />
   <p>
   +420 777 111 777  Plzeň <br/>
   +420 722 085 228 Praha
     </p>
   </div>
   <div className="contact-hours">
   <Clock2 />
   <p>Pondělí až pátek 9 - 17h</p>
   </div>
   </div>
   <div className="contact-map"></div>
    </div>
  )
}
