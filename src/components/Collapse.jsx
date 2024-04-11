import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

const Collapse = ({ title, textContent }) => {
  const width = window.innerWidth;
  const mobile = width <= 425;
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(mobile ? '30px' : '52px');
  const [arrowClass, setArrowClass] = useState('');
  const [contentContainerClass, setContentContainerClass] = useState('');
  const [contentTextClass, setContentTextClass] = useState('');

  const heightRef = useRef();

  useEffect(() => {
    if (isOpen) {
      setContentHeight(`${heightRef.current.scrollHeight}px`);
      setArrowClass('collapse__arrow--open');
      setContentContainerClass('collapse__content-container--open');
      setContentTextClass('collapse__content-text--open');
    } else {
      setContentHeight(mobile ? '30px' : '52px');
      setArrowClass('collapse__arrow--close');
      setContentTextClass('collapse__content-text--close');
      setContentContainerClass('collapse__content-container--close');
    }
  }, [isOpen, mobile]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  // console.log(contentHeight);
  // console.log(heightRef.current.scrollHeight);

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
          className={arrowClass + ' collapse__arrow'}
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
      <div className={contentContainerClass + ' collapse__content-container'}>
        <p className={contentTextClass + ' collapse__content-text'}>
          {textContent}
        </p>
      </div>
    </div>
  );
};
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
};
export default Collapse;
