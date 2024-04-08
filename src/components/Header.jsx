import PropTypes from 'prop-types';
import Menu from './Menu';

const Header = ({ currentPage }) => {
  return (
    <div>
      Kasa
      <Menu currentPage={currentPage} />
    </div>
  );
};
Header.propTypes = {
  currentPage: PropTypes.string,
};
export default Header;
