import React, { useEffect } from "react";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendar.css";
import { studioHistoryHooks } from "../../../hooks/studioHooks";
import { useParams } from "react-router";
import { useBooked } from "../../../global/globalState";
import { userHooks } from "../../../hooks/userHooks";

const BookingCalendar: React.FC = () => {
  const [state]: any = useBooked();
  const localizer = momentLocalizer(moment);
  const { data } = userHooks();
  const { productID } = useParams();

  const { viewHistoryStudio }: any = studioHistoryHooks(productID!);

  const makeEvent: Array<{}> = [];

  if (viewHistoryStudio?.history !== undefined) {
    makeEvent.push([
      ...viewHistoryStudio?.history,
      {
        bookingSession: !!state?.days ? state?.days : state?.hourly,
        bookingRoute: !!state.days ? "days" : "hourly",
        accountID: data?._id,

        studioID: productID,
        cost: `₦${state.cost}`,

        title: `Booked by ${data?.firstName}`,

        start: !!state?.days
          ? moment(state?.dateInDayStart)
          : moment(state?.dateInDateTimeStart),

        end: !!state?.days
          ? moment(state?.dateInDayEnd)
          : moment(state?.dateInDateTimeEnd),

        bookingDate: `${
          !!state?.days ? state?.dateInDayStart : state?.dateInDateTimeStart
        } - ${!!state?.days ? state?.dateInDayEnd : state?.dateInDateTimeEnd}`,
      },
    ]);
  }

  const filteredEvents = makeEvent.map((props) => {
    return props;
  });

  const bookedAppointment = viewHistoryStudio?.history.map((el: any) => {
    return {
      start: el?.calendarDate.split("-")[0],
      end: el?.calendarDate.split("-")[0],
      cost: el?.cost,
      title: `Booked by ${data?.firstName}`,
      // end: el?.calendarDate()?.split("-")[1],
    };
  });

  return (
    <div className="my-calendar-container text-[12px] font-sans ">
      <Calendar
        localizer={localizer}
        events={bookedAppointment}
        // events={filteredEvents.flat()}
        style={{ height: 500 }}
        views={["month", "agenda"]}
      />
    </div>
  );
};

export default BookingCalendar;
