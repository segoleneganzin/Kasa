import { useParams } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
const HousingSheet = () => {
  const housingId = useParams();
  return (
    <PageLayout currentPage={'HousingSheet'}>
      <h1>Fiche logement {housingId.id}</h1>
    </PageLayout>
  );
};

export default HousingSheet;
