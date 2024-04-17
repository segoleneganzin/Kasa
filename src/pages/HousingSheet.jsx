import { useEffect } from 'react';
import { useFetch } from '../api/useFetch';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Host from '../components/Host';
import Rate from '../components/Rate';
import Tags from '../layouts/Tags';
import HousingSheetDetails from '../layouts/HousingSheetDetails';
import HousingSheetTitles from '../layouts/HousingSheetTitles';
import Slideshow from '../components/Slideshow';

const HousingSheet = () => {
  const { housingId } = useParams(); // get id from url
  const navigate = useNavigate(); // manage redirection in case of unknown housingId

  let filteredHousing;

  // get housings from json file
  const { data, isLoading, error } = useFetch(
    window.location.origin + `/housingsAds.json`
  );
  // get housing by id
  if (!isLoading) {
    filteredHousing = data.find((housing) => housing.id === housingId);
  }

  // execute after render to wait for all the information needed
  useEffect(() => {
    // if id doesn't match with any housing, redirecting to 404 error page
    if (!isLoading && !filteredHousing) {
      navigate('/erreur404');
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
            <Slideshow
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
