import logo from '../assets/LOGOFooter.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={logo} alt='Logo' className='footer__logo' />
      <p className='footer__text highlightText'>
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
