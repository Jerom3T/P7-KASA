import React from 'react';
import logo_footer from '../images/logo_footer.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo_footer} alt="logo_footer" /> 
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
