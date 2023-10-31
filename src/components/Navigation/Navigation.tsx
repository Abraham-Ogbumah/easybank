import NavLinks from './NavLinks';

import iconcart from '@assets/shared/desktop/icon-cart.svg';
import hamburger from '@assets/shared/tablet/icon-hamburger.svg';
import logo from '@assets/shared/desktop/logo.svg';

import './navigation.css';

export default function Navigation() {
  return (
    <div className="nav-container">
      <div className="hamburger">
        <img
          src={hamburger}
          className="icon-hamburger"
          width={16}
          height={15}
          alt=""
        />
      </div>

      <div className="logo">
        <img src={logo} className="logo-image" />
      </div>

      <NavLinks />

      <div className="cart">
        <img
          src={iconcart}
          className="icon-cart"
          width={23}
          height={20}
          alt=""
        />
      </div>
    </div>
  );
}
