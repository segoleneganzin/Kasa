import { useFetch } from '../api/useFetch';
import { Link } from 'react-router-dom';
import HousingCard from '../components/HousingCard';
import Loader from '../components/Loader';

/**
 * Layout to display housings
 * @returns {JSX.Element}
 */
const Housings = () => {
  // get the datas from json file
  const { data, isLoading, error } = useFetch(
    window.location.origin + `/housingsAds.json`
  );

  return (
    <section className='housings'>
      {error ? (
        <p>Il y a eu une erreur, veuillez recharger la page</p>
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className='housings__cards-container'>
          {data.map((housing) => (
            <Link to={`/logement/${housing.id}`} key={housing.id}>
              <HousingCard title={housing.title} cover={housing.cover} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Housings;
