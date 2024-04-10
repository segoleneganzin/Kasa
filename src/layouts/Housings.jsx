// import { useNavigate } from 'react-router-dom';
import { useFetch } from '../api/useFetch';
import HousingCard from '../components/HousingCard';
import Loader from '../components/Loader';

const Housings = () => {
  // TODO sessionStorage ?
  const { data, isLoading, error } = useFetch(
    window.location.origin + `/src/assets/housingsAds.json`
  );
  console.log(isLoading);
  //   const navigate = useNavigate();
  //   if (error) {
  //     navigate('*')
  // }

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
