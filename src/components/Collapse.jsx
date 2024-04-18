import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

/**
 * @component
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.textContent
 * @param {string[]} props.listContent
 * @returns {JSX.Element}
 */
const Collapse = ({ title, textContent, listContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobile = window.innerWidth <= 425;
  const [contentHeight, setContentHeight] = useState(mobile ? '30px' : '52px'); // manage height for smooth open close
  // manage open close element className for transition
  const [classNames, setClassNames] = useState({
    arrow: '',
    contentContainer: '',
    content: '',
  });

  const heightRef = useRef();

  // if content is a list, like for housing equipments
  let listContentFormated;
  if (listContent) {
    listContentFormated = listContent.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  }

  useEffect(() => {
    setContentHeight(
      isOpen ? `${heightRef.current.scrollHeight}px` : mobile ? '30px' : '52px'
    );
    setClassNames({
      arrow: isOpen ? 'collapse__arrow--open' : 'collapse__arrow--close',
      contentContainer: isOpen
        ? 'collapse__content-container--open'
        : 'collapse__content-container--close',
      content: isOpen ? 'collapse__content--open' : 'collapse__content--close',
    });
  }, [isOpen, mobile]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className='collapse'
      ref={heightRef}
      style={{ height: `${contentHeight}` }}
    >
      <div className='collapse__header'>
        <h2 className='collapse__title'>{title}</h2>
        <span
          onClick={toggleCollapse}
          className={classNames.arrow + ' collapse__arrow'}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
            fill='none'
          >
            <path
              d='M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z'
              fill='white'
            />
          </svg>
        </span>
      </div>
      {/* only visible when isOpen */}
      <div
        className={classNames.contentContainer + ' collapse__content-container'}
        aria-hidden={isOpen}
      >
        {listContent ? (
          <ul className={classNames.content + ' collapse__content'}>
            {listContentFormated}
          </ul>
        ) : (
          <p className={classNames.content + ' collapse__content'}>
            {textContent}
          </p>
        )}
      </div>
    </div>
  );
};
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  textContent: PropTypes.string,
  listContent: PropTypes.arrayOf(PropTypes.string),
};
export default Collapse;
