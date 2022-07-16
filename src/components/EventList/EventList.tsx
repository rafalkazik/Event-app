import { Key, useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import EventItem from '../EventItem/EventItem';
import classNames from 'classnames';

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
  const [eventsLimit, setEventsLimit] = useState(6);

  const loadMoreEvents = () => {
    setEventsLimit(eventsLimit + 3);
  };

  return (
    <section className='event-list'>
      <div className='event-list-container'>
        <EventItem events={eventsList} eventsLimit={eventsLimit} />
      </div>
      <button
        onClick={loadMoreEvents}
        className={classNames('event-list__button', {
          'event-list__button--disabled': eventsLimit >= eventsList.length,
        })}
        disabled={eventsLimit >= eventsList.length ? true : false}
      >
        show more
      </button>
    </section>
  );
};

export default EventList;
