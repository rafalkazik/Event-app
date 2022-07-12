import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ImageUrl {
  image: string;
}

const EventHero = (image: ImageUrl) => {
  const imageUrl = image.image;

  return (
    <section className='event-hero'>
      <div
        className='event-hero__container'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
    </section>
  );
};

export default EventHero;
