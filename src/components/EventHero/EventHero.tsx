import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { getMonthName } from '../EventItem/EventItem.model';

interface Props {
  image: string;
  title: string;
  artists: string;
  date: string;
}

const EventHero = ({ image, title, artists, date }: Props) => {
  const imageUrl = image;

  return (
    <section className='event-hero'>
      <div
        className='event-hero__container'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className='event-hero__event-text-container event-text-container'>
          <div className='event-text-container__back-button'>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className='event-text-container__back-button-icon'
            />
            <Link href='/'>
              <p className='event-text-container__back-button-text'> Back</p>
            </Link>
          </div>
          <h1 className='event-text-container__title'>{title}</h1>
          <p className='event-text-container__artists'>{artists}</p>
        </div>
        <div className='event-hero__event-box-container event-box-container'>
          <div className='event-box-container__event-box event-box'>
            <p className='event-box__top-text'>When?</p>
            <div className='event-box__date-container'>
              <p className='event-box__day'>{date.slice(8, 10)}</p>
              <p className='event-box__month'>
                {getMonthName(parseInt(date.slice(6, 7)))}
              </p>
              <p className='event-box__year'>{date.slice(0, 4)}</p>
            </div>
            <div className='event-box__buttons-container'>
              <button className='event-box__button event-box__button--booking'>
                Book event
              </button>

              <button className='event-box__button event-box__button--organizer-website'>
                <a
                  href='/'
                  target='_blank'
                  rel='noreferrer noopener'
                  className='event-box__button--organizer-website-link'
                >
                  {"organizer's website"}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
