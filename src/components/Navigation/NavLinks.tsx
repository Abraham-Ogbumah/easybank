import React from 'react';
interface Props {
  navClass?: string;
  listClass?: string;
  itemClass?: string;
  linkClass?: string;
}

const NavLinks: React.FC<Props> = ({
  navClass = 'nav',
  listClass = 'nav__list',
  itemClass = 'nav__item',
  linkClass = 'nav__link',
}) => {
  return (
    <nav className={navClass}>
      <ul className={listClass}>
        <li className={itemClass}>
          <a href="#" className={linkClass}>
            Home
          </a>
        </li>
        <li className={itemClass}>
          <a href="#" className={linkClass}>
            About
          </a>
        </li>
        <li className={itemClass}>
          <a href="#" className={linkClass}>
            Contact
          </a>
        </li>
        <li className={itemClass}>
          <a href="#" className={linkClass}>
            Blog
          </a>
        </li>
        <li className={itemClass}>
          <a href="#" className={linkClass}>
            Careera
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
