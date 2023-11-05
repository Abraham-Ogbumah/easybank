import NavLinks from './NavLinks';

import hamburger from '@assets/images/icon-hamburger.svg';
import logo from '@assets/images/logo.svg';
import Button from '../Button/Button';

import './navigation.css';

export default function Navigation() {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} className="logo-image" />
      </div>

      <div className="hamburger">
        <img
          src={hamburger}
          className="icon-hamburger"
          width={25}
          height={15}
          alt=""
        />
      </div>

      <NavLinks />
      <Button
        onClick={() => console.log('clicked')}
        type='button'
        className='btn-primary'
        children='Request Invite'
      />
    </div>
  );
}
