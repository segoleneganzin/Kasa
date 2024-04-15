import { useFetch } from '../api/useFetch';
import HousingCard from '../components/HousingCard';
import Loader from '../components/Loader';

/**
 * Layout to display housings
 * @returns {JSX.Element}
 */
const Housings = () => {
  // TODO sessionStorage ?
  // get the datas from json file
  const { data, isLoading, error } = useFetch(
    window.location.origin + `/src/assets/datas/housingsAds.json`
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
            <HousingCard
              housingId={housing.id}
              housings={data}
              key={housing.id}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Housings;
