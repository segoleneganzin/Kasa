import PropTypes from 'prop-types';

const SlideShow = ({ pictures }) => {
  return (
    <div>
      <img src={pictures[0]} alt='' className='slideShow' />
    </div>
  );
};
SlideShow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default SlideShow;
