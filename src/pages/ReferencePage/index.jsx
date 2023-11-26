import { ButtonBack } from '../../components/ButtonBack';
import { Title } from '../../components/Title';
import { ButtonUp } from '../../components/ButtonUp';
import { Reference } from './components/Reference';
import couple from './img/couple.jpg';
import brideGroome from './img/bride-groome.jpg';
import sunset from './img/sunset.jpg';
import './style.css';

export const ReferencePage = () => {
  const data = [
    {
      id: 0,
      author: 'Kristýna  & David',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
      photo: couple,
      alt: 'Newlyweds on the beach',
    },
    {
      id: 1,
      author: 'Eliška  & Damián',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      photo: brideGroome,
      alt: 'Newlyweds after the ceremony',
    },
    {
      id: 2,
      author: 'Nikol  & kristyán',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      photo: sunset,
      alt: 'Newlyweds on the beach at sunset',
    },
  ];

  return (
    <>
      <ButtonBack />
      <main>
        <div className="reference-container">
          <Title label="Reference" />
          {data.map(({ id, author, text, photo, alt }) => (
            <Reference
              key={id}
              author={author}
              text={text}
              photo={photo}
              alt={alt}
              corner={id % 2 === 0 ? 'right-corner' : 'left-corner'}
            />
          ))}
        </div>
        <ButtonUp />
      </main>
    </>
  );
};
