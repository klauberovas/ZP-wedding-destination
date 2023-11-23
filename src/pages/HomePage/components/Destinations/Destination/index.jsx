import './style.css'

export const Destination = ({title, description, photo}) => {

  return (
    <div className="destination">
    <img src={photo}></img>
    <div className="hide">
     <div className="description">{description}</div>
   </div>
    <div className="title">
     <h3>{title}</h3>
    </div>
   </div>
  )
}

