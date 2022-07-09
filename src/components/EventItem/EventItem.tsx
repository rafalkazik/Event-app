import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
  console.log(eventsLimit);
  return (
    <section className='hero'>
      {eventsList
        .map((item: EventsItem) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))
        .slice(0, eventsLimit)}
    </section>
  );
};

export default EventItem;
