import { useEffect } from 'react';
import { useFetch } from '../api/useFetch';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Host from '../components/Host';
import Rate from '../components/Rate';
import Tags from '../layouts/Tags';
import HousingSheetDetails from '../layouts/HousingSheetDetails';
import HousingSheetTitles from '../layouts/HousingSheetTitles';
import SlideShow from '../components/SlideShow';

const HousingSheet = () => {
  const { housingId } = useParams();
  // TODO sessionStorage ?
  const navigate = useNavigate();
  let filteredHousing;
  const { data, isLoading, error } = useFetch(
    window.location.origin + `/src/assets/datas/housingsAds.json`
  );
  if (!isLoading) {
    filteredHousing = data.find((housing) => housing.id === housingId);
  }

  // execute after render to wait for all the information needed
  useEffect(() => {
    if (!isLoading && !filteredHousing) {
      navigate('/erreur');
    }
  }, [isLoading, filteredHousing, navigate]);

  return (
    <main>
      {error ? (
        <p>Il y a eu une erreur, veuillez recharger la page</p>
      ) : isLoading ? (
        <Loader />
      ) : (
        filteredHousing && (
          <div className='housing-sheet'>
            <SlideShow
              pictures={filteredHousing.pictures}
              title={filteredHousing.title}
            />
            {/* header */}
            <div className='housing-sheet__header'>
              {/* titles and tags section */}
              <section className='housing-sheet__header-titles-tags'>
                {/* titles */}
                <HousingSheetTitles
                  title={filteredHousing.title}
                  location={filteredHousing.location}
                />
                {/* tags */}
                <Tags tags={filteredHousing.tags} />
              </section>
              {/* host and rate section */}
              <section className='housing-sheet__header-host-rate'>
                {/* host */}
                <Host
                  hostName={filteredHousing.host.name}
                  hostPicture={filteredHousing.host.picture}
                />
                {/* rate */}
                <Rate rateLevel={Number(filteredHousing.rating)} />
              </section>
            </div>
            {/* details */}
            <HousingSheetDetails
              description={filteredHousing.description}
              equipments={filteredHousing.equipments}
            />
          </div>
        )
      )}
    </main>
  );
};

export default HousingSheet;
