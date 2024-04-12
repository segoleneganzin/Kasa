import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <main className='error-page'>
      <h1 className='error-page__type'>404</h1>
      <p className='error-page__message'>
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link to={'/'} className='error-page__link'>
        Retourner sur la page d&apos;accueil
      </Link>
    </main>
  );
};

export default Error404;
