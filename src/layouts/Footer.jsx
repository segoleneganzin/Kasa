import logo from '../assets/images/LOGOFooter.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <img
        src={logo}
        alt='Logo'
        className='footer__logo'
        height={40}
        width={122}
      />
      <p className='footer__text highlightText'>
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
