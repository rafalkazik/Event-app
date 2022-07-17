import { getMonthName } from './EventItem.model';
import Link from 'next/link';

interface Events {
  eventsLimit: number;
  events: {
    id: string;
    title: string;
    slug: string;
    artists: string;
    description: string;
    price: number;
    date: string;
    thumbnail: {
      url: string;
    };
    categories: {
      categoryName: string;
    };
  };
}

interface EventsItem {
  id: string;
  title: string;
  slug: string;
  artists: string;
  description: string;
  price: number;
  date: string;
  thumbnail: {
    url: string;
  };
  categories: {
    categoryName: string;
  };
}

const EventItem = (events: Events) => {
  const eventsList: any = events.events;
  const eventsLimit = events.eventsLimit;

  return (
    <>
      {eventsList
        .map((item: EventsItem) => (
          <div key={item.id} className='event-item'>
            <div
              className='event-item__image'
              style={{ backgroundImage: `url(${item.thumbnail.url})` }}
            >
              <div className='event-item__image-data image-data'>
                <p className='image-data__price'>
                  {item.price !== 0 ? `$${item.price}.00` : 'FREE'}
                </p>
              </div>
            </div>
            <div className='event-item__content'>
              <div className='event-item__event-item-date'>
                <p className='event-item-date__month'>
                  {getMonthName(parseInt(item.date.slice(6, 7)))}
                </p>
                <p className='event-item-date__day'>{item.date.slice(8, 10)}</p>
              </div>
              <div className='event-item__event-item-details event-item-details'>
                <p className='event-item-details__title'>{item.title}</p>
                <p className='event-item-details__artists'>{item.artists}</p>
              </div>
            </div>
            <div className='event-item__show-more-button show-more-button'>
              <button className='show-more-button__button'>
                <Link href={`/${item.slug}`}>
                  <a className='show-more-button__button-link'>show details</a>
                </Link>
              </button>
            </div>
          </div>
        ))
        .slice(0, eventsLimit)}
    </>
  );
};

export default EventItem;
