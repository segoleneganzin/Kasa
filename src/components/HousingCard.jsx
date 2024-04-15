import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { mobileXs, laptopXl } from '../utils/reusableConst';

const HousingCard = ({ housingId, housings }) => {
  // avoid call backend by passed housings list into props
  const filterHousing = housings.filter((housing) => housing.id == housingId);
  const housing = filterHousing[0];
  const housingPicture = housing.cover;
  return (
    <Link to={`/logement/${housingId}`}>
      <article className='housing-card'>
        <img
          src={housingPicture}
          alt=''
          className='housing-card__picture'
          height={laptopXl ? 255 : 340}
          width={mobileXs ? 280 : 340}
        />
        <h2 className='housing-card__title'>{housing.title}</h2>
      </article>
    </Link>
  );
};
HousingCard.propTypes = {
  housingId: PropTypes.string.isRequired,
  housings: PropTypes.array.isRequired,
};
export default HousingCard;
