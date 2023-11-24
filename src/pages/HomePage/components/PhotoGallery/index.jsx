import {ImageGallery}  from "./ImageGallery"
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
  { url: pic1, alt: "" },
  { url: pic2, alt: "" },
  { url: pic3, alt: "" },
  { url: pic4, alt: "" }, 
  { url: pic5, alt: "" },
  { url: pic6, alt: "" },
  { url: pic7, alt: "" },
  { url: pic8, alt: "" },
]

export const Photogallery = () => {
  return (
    <section className="photogallery">
    <div className="photo-gallery-all" >
      <h2>Fotogalerie</h2>
      <ImageGallery images={IMAGES} />
    </div>
    </section>
  )
}

