import PropTypes from 'prop-types';

const Tag = ({ name }) => {
  return <span className='tag'>{name}</span>;
};
Tag.propTypes = {
  name: PropTypes.string,
};
export default Tag;
