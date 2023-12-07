import React from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "./calendar.css"

const BookingCalendar: React.FC = () => {
 const localizer = momentLocalizer(moment);



 const events = [
    {
      id: 0,
      title: 'Booked',
      start: moment().add(1, 'days').startOf('day').toDate(),
      end: moment().add(1, 'days').endOf('day').toDate(),
    },
    {
      id: 1,
      title: 'Booked',
      start: moment().add(3, 'days').startOf('day').toDate(),
      end: moment().add(3, 'days').endOf('day').toDate(),
    },
 ];

 return (
    <div className="my-calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month']}
      />
    </div>
 );
};

export default BookingCalendar;