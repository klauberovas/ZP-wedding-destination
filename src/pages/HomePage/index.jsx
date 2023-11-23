import './style.css';
import { Banner } from './components/Banner';
import { Destinations } from './components/Destinations';
import { Packages } from './components/Packages';

export const HomePage = () => {
  return (
    <>
      <main>
        <Banner />
        <Destinations />
        <Packages />
      </main>
    </>
  );
};
