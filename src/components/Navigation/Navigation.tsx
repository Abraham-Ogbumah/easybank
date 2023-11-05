import { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import Modal from '../Modal/Modal';

import hamburger from '@assets/images/icon-hamburger.svg';
import closeIcon from '@assets/images/icon-close.svg';
import logo from '@assets/images/logo.svg';
import Button from '../Button/Button';

import './navigation.css';

const Navigation = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isModalOpen &&
        event.target instanceof Node &&
        !document.querySelector('.modal-content')?.contains(event.target)
      ) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} className="logo-image" />
      </div>

      <div className="hamburger" onClick={toggleModal}>
        <img
          src={isModalOpen ? closeIcon : hamburger}
          className="icon-hamburger"
          width={isModalOpen ? 20 : 25}
          height={15}
          alt=""
        />
      </div>

      <NavLinks />
      <Button
        onClick={() => console.log('clicked')}
        type="button"
        className="btn btn-top"
        children="Request Invite"
      />

      <Modal show={isModalOpen} onClose={toggleModal}>
        {/* Modal Content Here */}
        <NavLinks
          navClass="modal_nav"
          listClass="modal_nav__list"
          itemClass=""
          linkClass="modal_nav__link"
        />
        {/* You might want to display the nav links in the modal too */}
      </Modal>
    </div>
  );
};

export default Navigation;
