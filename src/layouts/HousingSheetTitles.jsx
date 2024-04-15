import PropTypes from 'prop-types';

/**
 * Layout to display housing sheet titles : title + location into housingSheet page
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.location
 * @returns {JSX.Element}
 */
const HousingSheetTitles = ({ title, location }) => {
  return (
    <div className='housing-sheet__titles'>
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
};
HousingSheetTitles.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default HousingSheetTitles;
