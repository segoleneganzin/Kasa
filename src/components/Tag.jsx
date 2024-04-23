import PropTypes from 'prop-types';

/**
 * @component
 * @param {Object} props
 * @param {string} props.name
 * @returns {JSX.Element}
 */
const Tag = ({ name }) => {
  return <p className='tag'>{name}</p>;
};
Tag.propTypes = {
  name: PropTypes.string,
};
export default Tag;
