import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

const SlideShow = ({ pictures, title }) => {
  const previousCarouselPicture = useRef();
  const nextCarouselPicture = useRef();
  const [currentPicture, setCurrentPicture] = useState(pictures[0]);
  const mobile = window.innerWidth <= 425;

  /**
   * manage picture to display depends of its index
   * @param {string} direction
   * @returns object
   */
  const manageSlideShow = (direction) => {
    let pictureIndex = pictures.indexOf(currentPicture);
    if (direction === 'previous') {
      currentPicture === pictures[0]
        ? setCurrentPicture(pictures[pictures.length - 1])
        : setCurrentPicture(pictures[pictureIndex - 1]);
    }
    if (direction === 'next') {
      currentPicture === pictures[pictures.length - 1]
        ? setCurrentPicture(pictures[0])
        : setCurrentPicture(pictures[pictureIndex + 1]);
    }
  };

  return (
    <div className='slideshow'>
      {pictures.length > 1 && (
        <div className='slideshow__arrows'>
          <a
            ref={previousCarouselPicture}
            onClick={() => manageSlideShow('previous')}
            aria-label='image précédente'
            aria-controls='display-medias'
            className='slideshow__arrow'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='80'
              viewBox='0 0 48 80'
              fill='none'
            >
              <path
                d='M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z'
                fill='white'
              />
            </svg>
          </a>
          <a
            ref={nextCarouselPicture}
            onClick={() => manageSlideShow('next')}
            aria-label='image suivante'
            aria-controls='display-medias'
            className='slideshow__arrow'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='80'
              viewBox='0 0 48 80'
              fill='none'
            >
              <path
                d='M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z'
                fill='white'
              />
            </svg>
          </a>
        </div>
      )}
      <div
        id='display-medias'
        aria-live='polite'
        className='slideshow__picture-container'
      >
        <img
          src={currentPicture}
          className='slideshow__picture'
          alt={`${title}, photo ${pictures.indexOf(currentPicture) + 1} sur ${
            pictures.length
          }`}
          height={400}
          width={300}
          tabIndex={0}
        />
      </div>
      {pictures.length > 1 && !mobile ? (
        <p className='slideshow__picture-index'>
          {pictures.indexOf(currentPicture) + 1}/{pictures.length}
        </p>
      ) : (
        ''
      )}
    </div>
  );
};
SlideShow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
export default SlideShow;
