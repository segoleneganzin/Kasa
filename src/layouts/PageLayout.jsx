import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PageLayout;
