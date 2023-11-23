import './style.css';
import { Banner } from './components/Banner';
import { Destinations } from './components/Destinations';

export const HomePage = () => {
  return (
    <>
      <main>
        <Banner />
        <Destinations/>
      </main>
    </>
  );
};
