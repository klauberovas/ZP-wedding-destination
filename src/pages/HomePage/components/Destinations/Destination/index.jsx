import './style.css'

export const Destination = ({title, description, photo}) => {

  return (
    <div className="destination">
    <img className="destination-pic" src={photo}></img>
    <div className="hide">
     <div className="description">{description}</div>
   </div>
    <div className="title-destination">
     <h3>{title}</h3>
    </div>
   </div>
  )
}

