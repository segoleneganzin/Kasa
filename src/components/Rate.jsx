import PropTypes from 'prop-types';

/**
 * @component
 * @param {Object} props
 * @param {number} props.rateLevel
 * @returns {JSX.Element}
 */
const Rate = ({ rateLevel }) => {
  const stars = [];
  // 5-star rating
  // if i is smaller than the housing rating, then the star is orange, otherwise it is grey
  for (let i = 0; i < 5; i++) {
    if (i < rateLevel) {
      stars.push(
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 576 512'
          fill='#FF6060'
          key={i}
          aria-hidden='true'
        >
          <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
        </svg>
      );
    } else {
      stars.push(
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 576 512'
          fill='#E3E3E3'
          key={i}
          aria-hidden='true'
        >
          <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
        </svg>
      );
    }
  }
  return (
    <div className='rate'>
      {stars}
      <p className='visually-hidden'>
        Le logement possède {rateLevel} étoiles sur 5
      </p>
    </div>
  );
};
Rate.propTypes = {
  rateLevel: PropTypes.number.isRequired,
};
export default Rate;
