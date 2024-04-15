import Menu from './Menu';
import logoDesktop from '../assets/images/LOGODesktop.svg';
import logoMobile from '../assets/images/LOGOMobile.svg';
import { mobile } from '../utils/reusableConst';

const Header = () => {
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
