import PropTypes from 'prop-types';
import { mobile, tablet } from '../utils/reusableConst';

const Host = ({ hostName, hostPicture }) => {
  return (
    <div className='host'>
      <p className='host__name'>{hostName}</p>
      <img
        src={hostPicture}
        alt={'Photo de ' + hostName}
        className='host__picture'
        height={tablet ? (mobile ? 32 : 50) : 64}
        width={tablet ? (mobile ? 32 : 50) : 64}
      />
    </div>
  );
};
Host.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPicture: PropTypes.string.isRequired,
};
export default Host;
