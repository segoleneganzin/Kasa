import { useParams } from 'react-router-dom';
const HousingSheet = () => {
  const housingId = useParams();
  return (
    <main>
      <h1>Fiche logement {housingId.id}</h1>
    </main>
  );
};

export default HousingSheet;
