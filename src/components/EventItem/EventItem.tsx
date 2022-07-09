import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface Events {
  events: {
    events: any;
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

const EventItem = (events: Events) => {
  const eventsList = events.events;
  console.log(eventsList);
  return (
    <section className='hero'>
      {eventsList.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
};

export default EventItem;
