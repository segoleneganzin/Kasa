import PropTypes from 'prop-types';

/**
 * @component
 * @param {Object} props
 * @param {string} props.name
 * @returns {JSX.Element}
 */
const Tag = ({ name }) => {
  return <span className='tag'>{name}</span>;
};
Tag.propTypes = {
  name: PropTypes.string,
};
export default Tag;
