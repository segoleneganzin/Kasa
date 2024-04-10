import Menu from './Menu';
import logoDesktop from '../assets/LOGODesktop.svg';
import logoMobile from '../assets/LOGOMobile.svg';

const Header = () => {
  // manage responsive img
  const width = window.innerWidth;
  const mobile = width <= 425;
  return (
    <header className='header'>
      <img
        src={mobile ? logoMobile : logoDesktop}
        alt='logo'
        className='header__logo'
        width={mobile ? 145 : 210}
        height={mobile ? 46 : 68}
      />
      <Menu />
    </header>
  );
};

export default Header;
