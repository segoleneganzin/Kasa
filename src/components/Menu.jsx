import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Menu = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <nav className='menu'>
      <ul>
        <li>
          <Link
            to='/'
            className={currentUrl === '/' ? 'menu__currentPage' : ''}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to='/apropos'
            className={currentUrl === '/apropos' ? 'menu__currentPage' : ''}
          >
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
