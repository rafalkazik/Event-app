interface Props {
  description: string;
}

const EventContent = ({ description }: Props) => {
  return (
    <section className='event-content'>
      <div className='event-content-container'>
        <div className='event-content__event-details event-details'>
          <div className='event-details__event-description event-description'>
            <p className='event-description__title'>Description</p>
            <p className='event-description__text-content'>{description}</p>
          </div>
          <div className='event-details__event-description event-description'>
            <p className='event-description__title'>
              What times does the event start?
            </p>
            <p className='event-description__text-content'>
              Hours of the event:{' '}
              <span className='event-description__event-hours'>1am - 2am</span>
            </p>
          </div>
          <div className='event-details__event-description event-description'>
            <p className='event-description__title'>
              Have you got any questions??
            </p>
            <p className='event-description__text-content'>
              If you have any questions, please let us know by e-mail:{' '}
              <a
                href='mailto:email@email.com'
                className='event-description__text-content--link'
              >
                email@email.com
              </a>
            </p>
          </div>
        </div>

        <div className='event-content__event-location event-location'>
          <div className='event-location__location-content location-content'>
            <p className='location-content__title'>Our location</p>
          </div>
          <div
            className='location-content__map'
            dangerouslySetInnerHTML={{
              __html: `<iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1601.0459687405173!2d20.984639030018712!3d52.232280698828234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc84a53fffff%3A0xcc34cf4eefdeab0b!2sWarsaw%20Spire!5e0!3m2!1spl!2spl!4v1657916041150!5m2!1spl!2spl'
            width='100%'
            height='100%'
            style='border:none; border-radius:10px;'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
            ></iframe>`,
            }}
          ></div>
          <div className='event-location__location-content location-content'>
            <p className='location-content__title'>Contact details</p>
            <p className='location-content__text-content'>
              Warsaw Spire plac Europejski 1, 00-844 Warszawa, Polska
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventContent;
