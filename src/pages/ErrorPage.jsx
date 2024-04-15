import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * reusable page for different type of error,
 * Type and message can be managed into Router.
 * @param {Object} props
 * @param {string} props.description
 * @param {string[]} props.equipments
 * @returns {JSX.Element}
 */
const ErrorPage = ({ errorType, errorMessage }) => {
  return (
    <main className='error-page'>
      <h1 className='error-page__type'>{errorType}</h1>
      <p className='error-page__message'>{errorMessage}</p>
      <Link to={'/'} className='error-page__link'>
        Retourner sur la page d&apos;accueil
      </Link>
    </main>
  );
};
ErrorPage.propTypes = {
  errorType: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
export default ErrorPage;
