import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();
  const currentUrl = location.pathname; // use for manage css
  return (
    <nav className='menu'>
      <Link
        to='/'
        className={
          currentUrl === '/'
            ? 'highlightText menu__currentPage'
            : 'highlightText'
        }
      >
        Accueil
      </Link>
      <Link
        to='/apropos'
        className={
          currentUrl === '/apropos'
            ? 'highlightText menu__currentPage'
            : 'highlightText'
        }
      >
        A Propos
      </Link>
    </nav>
  );
};

export default Menu;
