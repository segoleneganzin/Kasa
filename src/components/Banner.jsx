import PropTypes from 'prop-types';

const Banner = ({ title, page }) => {
  return (
    <section className={`banner banner--${page}`}>
      <h1 className='banner__title'>{title}</h1>
    </section>
  );
};
Banner.propTypes = {
  title: PropTypes.string,
  page: PropTypes.string.isRequired,
};
export default Banner;
