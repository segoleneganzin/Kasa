import PropTypes from 'prop-types';

const Rate = ({ rateLevel }) => {
  return <div className='rate'>{rateLevel}</div>;
};
Rate.propTypes = {
  rateLevel: PropTypes.number.isRequired,
};
export default Rate;
