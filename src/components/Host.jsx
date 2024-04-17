import PropTypes from 'prop-types';

/**
 * @component
 * @param {Object} props
 * @param {string} props.hostName
 * @param {string} props.hostPicture
 * @returns {JSX.Element}
 */
const Host = ({ hostName, hostPicture }) => {
  const [hostFirstName, hostLastName] = hostName.split(' ');
  return (
    <div className='host'>
      <p className='host__name'>
        {hostFirstName}
        <br />
        {hostLastName}
      </p>
      <img
        src={hostPicture}
        alt={'Photo de ' + hostName}
        className='host__picture'
      />
    </div>
  );
};
Host.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPicture: PropTypes.string.isRequired,
};
export default Host;
