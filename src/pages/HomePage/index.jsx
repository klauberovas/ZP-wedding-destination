import './style.css';
import { Banner } from './components/Banner';
import { Destinations } from './components/Destinations';
import { Steps } from './components/Steps';
import { AboutUs } from './components/AboutUs';
import { Packages } from './components/Packages';
import { Photogallery } from './components/PhotoGallery';

export const HomePage = () => {
  return (
    <>
      <main>
        <Banner />
        <Destinations />
        <Steps />
        <AboutUs />
        <Packages />
        <Photogallery />
      </main>
    </>
  );
};
