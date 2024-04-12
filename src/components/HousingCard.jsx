import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HousingCard = ({ housingId, housings }) => {
  // avoid call backend by passed housings list into props
  const filterHousing = housings.filter((housing) => housing.id == housingId);
  const housing = filterHousing[0];
  const housingPicture = housing.cover;
  // manage responsive html height/width of img
  const width = window.innerWidth;
  const laptopXL = width <= 1400;
  const mobileXS = width <= 425;
  return (
    <Link to={`/logement/${housingId}`}>
      <article className='housing-card'>
        <img
          src={housingPicture}
          alt=''
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
  housings: PropTypes.array.isRequired,
};
export default HousingCard;
