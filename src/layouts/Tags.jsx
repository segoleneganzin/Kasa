import PropTypes from 'prop-types';
import Tag from '../components/Tag';

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
