import { ButtonBack } from '../../components/ButtonBack';
import { Title } from '../../components/Title';
import { ButtonUp } from '../../components/ButtonUp';
import { Reference } from './components/Reference';
import couple from './img/couple.jpg';
import brideGroome from './img/bride-groome.jpg';
import sunset from './img/sunset.jpg';
import photo1 from './img/photo1.png';
import photo2 from './img/photo2.jpg';
import photo3 from './img/photo3.jpg';
import photo4 from './img/photo4.jpg';
import photo5 from './img/photo5.jpg';
import photo6 from './img/photo6.jpg';
import photo7 from './img/photo7.jpg';
import photo8 from './img/photo8.jpg';
import photo9 from './img/photo9.jpg';
import './style.css';

export const ReferencePage = () => {
  const data = [
    {
      id: 0,
      author: 'Kristýna  & David',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
      photo: couple,
      alt: 'Newlyweds on the beach',
      gallery: [
        { photo: photo1, alt: 'Hands on a bouquet' },
        { photo: photo2, alt: 'Shoes and bouquets' },
        { photo: photo3, alt: 'Rings in the sand' },
      ],
    },
    {
      id: 1,
      author: 'Eliška  & Damián',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      photo: brideGroome,
      alt: 'Newlyweds after the ceremony',
      gallery: [
        { photo: photo4, alt: 'Newlyweds laughing' },
        { photo: photo5, alt: 'Newlyweds back' },
        { photo: photo6, alt: 'Wedding cake' },
      ],
    },
    {
      id: 2,
      author: 'Nikol  & Kristyán',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      photo: sunset,
      alt: 'Newlyweds on the beach at sunset',
      gallery: [
        { photo: photo7, alt: 'Wedding table by the sea' },
        { photo: photo8, alt: 'Newlyweds with sparklers' },
        { photo: photo9, alt: 'Wedding bouquets on the sofa' },
      ],
    },
  ];

  return (
    <>
      <ButtonBack />
      <main>
        <Title label="Reference" />
        <div className="reference-container">
          {data.map(({ id, author, text, photo, alt, gallery }) => (
            <Reference
              key={id}
              author={author}
              text={text}
              photo={photo}
              alt={alt}
              corner={id % 2 === 0 ? 'right-corner' : 'left-corner'}
              order={id % 2 !== 0 ? 'order--second' : null}
              gallery={gallery}
            />
          ))}
        </div>
        <ButtonUp />
      </main>
    </>
  );
};
