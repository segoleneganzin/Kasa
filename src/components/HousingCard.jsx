import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const HousingCard = ({ housingId, housings }) => {
  const filterHousing = housings.filter((housing) => housing.id == housingId);
  const housing = filterHousing[0];
  // console.log(filterHousing);
  const housingPicture = housing.cover;

  return (
    <Link to={`/logement/${housingId}`}>
      <article className='housing-card'>
        <h2 className='housing-card__title'>{housing.title}</h2>
        <img src={housingPicture} alt='' className='housing-card__picture' />
      </article>
    </Link>
  );
};
HousingCard.propTypes = {
  housingId: PropTypes.string.isRequired,
  housings: PropTypes.array.isRequired,
};
export default HousingCard;
