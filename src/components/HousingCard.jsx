import PropTypes from 'prop-types';

/**
 * @component
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.cover
 * @returns {JSX.Element}
 */
const HousingCard = ({ title, cover }) => {
  return (
    <article className='housing-card'>
      <img
        src={cover}
        alt={`Aperçu de ${title}`}
        className='housing-card__picture'
      />
      <div className='housing-card__title-container'>
        <h2 className='housing-card__title'>{title}</h2>
      </div>
    </article>
  );
};
HousingCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
export default HousingCard;
