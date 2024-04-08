import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Menu = ({ currentPage }) => {
  return (
    <nav className='menu'>
      <ul>
        <li>
          <Link
            to='/'
            className={currentPage === 'Home' ? 'menu__currentPage' : ''}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to='/apropos'
            className={currentPage === 'AboutUs' ? 'menu__currentPage' : ''}
          >
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
Menu.propTypes = {
  currentPage: PropTypes.string,
};
export default Menu;
