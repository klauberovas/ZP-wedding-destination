import './style.css';
import { Banner } from './components/Banner';
import { Destinations } from './components/Destinations';
import { Packages } from './components/Packages';
import { Photogallery } from './components/PhotoGallery';

export const HomePage = () => {
  return (
    <>
      <main>
        <Banner />
        <Destinations />
        <Packages />
        <Photogallery/>
      </main>
    </>
  );
};
