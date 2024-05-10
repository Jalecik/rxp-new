// components/HamburgerMenu.js
import { ArrowDblLeft, CloseIcon, SuccesIcon } from 'assets/images/common';
import React, { useState } from 'react';

import css from './profile-sidebar.module.scss';

import menubg from '../../../assets/images/menu-bg.png';
import Image from 'next/image';
import { LogoRXP } from 'assets/images/logo';

const ProfileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const list = [
    { name: 'Əsas', icon: <SuccesIcon /> },
    { name: 'Müraciətlər', icon: <SuccesIcon /> },
    { name: 'Elektron növbə', icon: <SuccesIcon /> },
    { name: 'Obyektlər', icon: <SuccesIcon /> }, 
    { name: 'Poçt qutusu', icon: <CloseIcon /> },
    { name: 'Qovluq', icon: <SuccesIcon /> },
    { name: 'Ödənişlər', icon: <SuccesIcon /> },
    { name: 'Tarixçə', icon: <SuccesIcon />}
  ]

  return (
    <div  className={`${css['hamburger-menu']} ${css['menu']} ${isOpen ? css.open : ''}`}>
      <div className={`${css['hamburger-menu__logo']} pt-28 pl-20'`}><LogoRXP /></div>
      <button className={`${css['hamburger-icon']}`}  onClick={toggleMenu}>
        <ArrowDblLeft/>
        <Image src={menubg} alt='arrow-dbl-left' />
      </button>
      <nav>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <a href='#'>
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
