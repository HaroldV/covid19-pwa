import React from 'react';  
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const Header = () => (  
    <Navbar className="bg-dark justify-content-center">
        <NavbarBrand className="text-white">
            COVID-19
        </NavbarBrand>
  </Navbar>
);

export default Header;