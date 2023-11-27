import './style.css'
import { Button } from '../../../components/Button';

export const Package = ({name, packages, photo, contains, price}) => {

  return (
    <div className="destination-packages">
    <div className="pic-container">
    <img className="package-pic" src={photo}></img>
    </div>
    <div className="package-title">
     <div className="title">{name}</div>
     <div className="type-packages">{packages}</div>
     <div className="contains" >  <ul>
          {contains.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul></div>
     <div className="package-price">{price}</div>
     <Button label="Mám zájem" />
    </div>
   </div>
  )
}
