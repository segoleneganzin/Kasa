import { useParams } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
const HousingSheet = () => {
  const housingId = useParams();
  return (
    <PageLayout currentPage={'HousingSheet'}>
      <main>
        <h1>Fiche logement {housingId.id}</h1>
      </main>
    </PageLayout>
  );
};

export default HousingSheet;
