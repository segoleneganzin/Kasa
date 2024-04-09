import { useFetch } from '../api/useFetch';
import { useParams } from 'react-router-dom';
const HousingSheet = () => {
  const { id: housingId } = useParams();
  let filteredHousing;
  const { data, isLoading, error } = useFetch(
    window.location.origin + `/src/assets/housingsAds.json`
  );
  if (!isLoading) {
    filteredHousing = data.find((housing) => housing.id === housingId);
  }

  return (
    <main>
      {error && 'Il y a eu un problème'}
      {isLoading && 'loader'}
      {!isLoading &&
        !error &&
        (filteredHousing ? (
          <h1>{filteredHousing.title}</h1>
        ) : (
          <h1>Logement non trouvé</h1>
        ))}
    </main>
  );
  // return <main>{/* <h1>{housing.title}</h1> */}</main>;
};

export default HousingSheet;