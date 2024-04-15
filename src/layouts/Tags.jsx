import PropTypes from 'prop-types';
import Tag from '../components/Tag';

/**
 * Layout to display tags into housingSheet page
 * @param {Object} props
 * @param {string[]} props.tags
 * @returns {JSX.Element}
 */
const Tags = ({ tags }) => {
  return (
    <div className='tags'>
      {tags.map((tag, index) => (
        <Tag name={tag} key={index} />
      ))}
    </div>
  );
};
Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};
export default Tags;
