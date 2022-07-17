import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const [image, setImage] = useState(1);

  useEffect(() => {
    const changeImage = setInterval(() => {
      image === 3 ? setImage(1) : setImage(image + 1);
    }, 5000);

    return () => clearInterval(changeImage);
  }, [image]);

  const prevImage = () => {
    image === 1 ? setImage(3) : setImage(image - 1);
  };

  const nextImage = () => {
    image === 3 ? setImage(1) : setImage(image + 1);
  };

  return (
    <section className='hero'>
      <div
        className='hero__container'
        style={{
          backgroundImage: `url(./hero_${image}.jpg)`,
        }}
      >
        <div className='hero__buttons-container'>
          <button className='hero__buttons-item' onClick={prevImage}>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className='buttons-item__icon'
            />
          </button>
          <button className='hero__buttons-item' onClick={nextImage}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className='buttons-item__icon'
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
