import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/images/spoonacular-logo.svg';
// == Import
import FooterStyled from './FooterStyled';

// == Composant
const Footer = () => (
  <FooterStyled>
    <div className="footer-icons">
      <Link to="/about-us">
        <Icon name="users" size="big" color="grey" />
      </Link>
      {/*
      <Link to="/contact">
        <Icon name="mail" size="big" color="grey" />
      </Link>
      <Link to="/legal-mentions">
        <Icon name="legal" size="big" color="grey" />
      </Link>
      <a>
        <Icon name="connectdevelop" size="big" color="grey" />
      </a>
      */}
      <a className="footer-link" href="https://spoonacular.com/food-api/">
        <img
              src={logo}
              alt="The logo of Spoonacular : a green spoon"
              className="logo-size"
            />
      </a>


    </div>
    <div className="footer-links">
      <Link to="/about-us" className="footer-link">About us</Link>
      {/*
      <Link to="/contact" className="footer-link">Contact</Link>
      
      <Link to="/legal-mentions" className="footer-link">Legal mentions</Link>
      */}
      <a className="footer-link" href="https://spoonacular.com/food-api/">
        API
        <img
              src={logo}
              alt="The logo of Spoonacular : a green spoon"
              className="logo-size"
            />
      </a>
    </div>
  </FooterStyled>
);

// == Export
export default Footer;
