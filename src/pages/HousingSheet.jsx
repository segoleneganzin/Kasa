import { useFetch } from '../api/useFetch';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
const HousingSheet = () => {
  const { housingId } = useParams();
  // TODO sessionStorage ?
  let filteredHousing;
  const { data, isLoading, error } = useFetch(
    window.location.origin + `/src/assets/datas/housingsAds.json`
  );
  if (!isLoading) {
    filteredHousing = data.find((housing) => housing.id === housingId);
  }

  return (
    <main className='housing-sheet'>
      {error && 'Il y a eu un problème'}
      {isLoading && <Loader />}
      {!isLoading &&
        !error &&
        (filteredHousing ? (
          <h1>{filteredHousing.title}</h1>
        ) : (
          <h1>Logement non trouvé</h1>
        ))}
    </main>
  );
};

export default HousingSheet;
