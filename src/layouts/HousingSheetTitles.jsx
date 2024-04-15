import PropTypes from 'prop-types';
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
