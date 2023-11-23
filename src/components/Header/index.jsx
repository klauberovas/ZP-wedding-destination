import { Navbar } from '../Navbar';
import './style.css';
import { useState } from 'react'


export const Header = () => {
  const [isOpened, setIsOpened] = useState()

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  }

  const switchOff = () => {
    setIsOpened(false)
  }

  return (
    <header>
      <div className="logo">
      </div>
      <div className={`menu ${isOpened ? '' : 'menu--closed'}`}>
        <button className={`menu__btn ${isOpened ? 'close' : ''}`} onClick={toggleMenu}></button>
        <Navbar isOpened={isOpened} switchOff={switchOff}/>
      </div>
    </header>
  );
};
