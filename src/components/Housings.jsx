// import { getHousings } from '../api/ApiHousings';
import HousingCard from './HousingCard';
import { useFetch } from '../api/useFetch';

const Housings = () => {
  // TODO localStorage ?
  const { data, isLoading, error } = useFetch(
    window.location.origin + `/src/assets/housingsAds.json`
  );

  // TODO message d'erreur
  return error ? (
    'Il y a eu un problème'
  ) : isLoading ? (
    'loader'
  ) : (
    <section className='housings'>
      {data.map((housing) => (
        <HousingCard housingId={housing.id} housings={data} key={housing.id} />
      ))}
    </section>
  );
};

export default Housings;
