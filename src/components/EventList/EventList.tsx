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
  const [eventsLimit, setEventsLimit] = useState(3);

  const loadMoreEvents = () => {
    setEventsLimit(eventsLimit + 1);
  };

  return (
    <section className='hero'>
      <EventItem events={eventsList} eventsLimit={eventsLimit} />
      <button onClick={loadMoreEvents}>ADD</button>
    </section>
  );
};

export default EventList;
