import NavLinks from './NavLinks';

import hamburger from '@assets/images/icon-hamburger.svg';
import logo from '@assets/images/logo.svg';

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
          width={16}
          height={15}
          alt=""
        />
      </div>

      <NavLinks />
    </div>
  );
}
