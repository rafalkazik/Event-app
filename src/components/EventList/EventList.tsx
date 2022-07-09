import { Key, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import EventItem from '../EventItem/EventItem';

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

const EventList = (events: Events) => {
  const eventsList = events.events.events;

  return (
    <section className='hero'>
      <EventItem events={eventsList} />
    </section>
  );
};

export default EventList;
