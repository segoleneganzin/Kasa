import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { mobileXS, laptopXL } from '../utils/reusableConst';

/**
 * avoid call backend by passed housings list into props
 * @component
 * @param {Object} props
 * @param {string} props.housingId
 * @param {object[]} props.housings
 * @returns {JSX.Element}
 */
const HousingCard = ({ housingId, housings }) => {
  const filterHousing = housings.filter((housing) => housing.id == housingId); // get housing by id
  const housing = filterHousing[0];
  return (
    <Link to={`/logement/${housingId}`}>
      <article className='housing-card'>
        <img
          src={housing.cover}
          alt={`Aperçu de ${housing.title}`}
          className='housing-card__picture'
          height={laptopXL ? 255 : 340}
          width={mobileXS ? 280 : 340}
        />
        <h2 className='housing-card__title'>{housing.title}</h2>
      </article>
    </Link>
  );
};
HousingCard.propTypes = {
  housingId: PropTypes.string.isRequired,
  housings: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default HousingCard;
