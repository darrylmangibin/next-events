import { useRouter } from 'next/router';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistic from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';

import { getEventById } from '../../dummy-data';

function EventDetailPage() {
  const router = useRouter();

  const { eventId } = router.query;

  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No Event found</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Go to events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistic
        date={event.date}
        address={event.location}
        image={event.image}
        alt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
