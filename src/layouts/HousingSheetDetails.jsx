import Collapse from '../components/Collapse';
import PropTypes from 'prop-types';

/**
 * Layout to display housing sheet details in Collpases : description + equipments into housingSheet page
 * @param {Object} props
 * @param {string} props.description
 * @param {string[]} props.equipments
 * @returns {JSX.Element}
 */
const HousingSheetDetails = ({ description, equipments }) => {
  return (
    <div className='housing-sheet__details'>
      {/* description section */}
      <section className='housing-sheet__details-description'>
        <Collapse title={'Description'} textContent={description} />
      </section>
      {/* equipments section */}
      <section className='housing-sheet__details-equipments'>
        <Collapse title={'Équipements'} listContent={equipments} />
      </section>
    </div>
  );
};
HousingSheetDetails.propTypes = {
  description: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default HousingSheetDetails;
