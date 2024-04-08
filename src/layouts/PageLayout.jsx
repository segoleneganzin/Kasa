import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PageLayout = ({ children, currentPage }) => {
  return (
    <div>
      <Header currentPage={currentPage} />
      {children}
      <Footer />
    </div>
  );
};
PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  currentPage: PropTypes.string,
};
export default PageLayout;
