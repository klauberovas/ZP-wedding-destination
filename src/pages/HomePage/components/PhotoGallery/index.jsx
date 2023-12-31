import {ImageGallery}  from "./ImageGallery"
import { Title } from "../../../../components/Title"
import './style.css'
import pic1 from "./pic1.jpg"
import pic2 from "./pic2.jpg"
import pic3 from "./pic3.jpg"
import pic4 from "./pic4.jpg"
import pic5 from "./pic5.jpg"
import pic6 from "./pic6.jpg"
import pic7 from "./pic7.jpg"
import pic8 from "./pic8.jpg"

const IMAGES = [
  { url: pic1, alt: "Bride and groom" },
  { url: pic2, alt: "Wedding cake" },
  { url: pic3, alt: "Paradise wedding" },
  { url: pic4, alt: "Sunset couple" }, 
  { url: pic5, alt: "Say Yes" },
  { url: pic6, alt: "Beach kiss" },
  { url: pic7, alt: "Beach photo" },
  { url: pic8, alt: "Beach photo" },
]

export const Photogallery = ({alt}) => {
  return (
    <section className="photogallery">
    <div className="photo-gallery-all" >
    <Title label="Fotogalerie" />
      <ImageGallery images={IMAGES} alt={alt} />
    </div>
    </section>
  )
}

