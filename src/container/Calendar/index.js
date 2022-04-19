import React from "react";
import Hoc from "../Hoc";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
const [a, b, c, d] = [
  "resourceTimeGridDay",
  "timeGridDay",
  "timeGridWeek",
  "dayGridMonth",
];
const Calendar = () => {
  return (
    <Hoc>
      <FullCalendar
        plugins={[dayGridPlugin, resourceTimeGridPlugin]}
        initialView={c}
      />
    </Hoc>
  );
};

export default Calendar;
