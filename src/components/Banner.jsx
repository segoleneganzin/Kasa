import PropTypes from 'prop-types';

/**
 * @component
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.page
 * @returns {JSX.Element}
 */
const Banner = ({ title, page }) => {
  return (
    <section className={`banner banner--${page}`}>
      {title && <h1 className='banner__title'>{title}</h1>}
    </section>
  );
};
Banner.propTypes = {
  title: PropTypes.string,
  page: PropTypes.string.isRequired,
};
export default Banner;
