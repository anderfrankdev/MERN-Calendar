import { Calendar as BigCalendar, View } from "react-big-calendar";
import { addHours } from "date-fns";
import { localizer } from "../helpers/calendarLocalize";
import { EventStruc } from "../../types";
import { CalendarEvent } from "./CalendarEvent";
import { CreateEventModal } from "./CreateEventModal";
import { useState } from "react";

const Events = [
  {
    title: "All Day Event very long title",
    notes: "Somenotes",
    bgColor: "#00c853",
    start: addHours(new Date(), -2),
    end: addHours(new Date(), 2),
    user: {
      _id: "1",
      name: "Juan",
    },
  },
];
export const Calendar = () => {
  const [modalVisibility, setModalVisibility] = useState("hidden");

  const lastViewSaved = localStorage.getItem("lastview") || "month";

  const eventStyleGetter = (
    event: EventStruc,
    start: Date,
    end: Date,
    isSelected: boolean,
  ) => {
    console.log({ event, start, end, isSelected });

    return {};
  };
  const onDoubleClick = (event: any) => {
    console.log(event);
  };
  const onSelect = (event: any) => {
    console.log({ click: event });
    setModalVisibility("block");
  };
  const onViewChanged = (event: any) => {
    console.log({ viewChanged: event });
    localStorage.setItem("lastview", event);
  };
  return (
    <div className="relative py-10 px-4 min-h-[calc(100vh-72px)]">
      <BigCalendar
        className="bg-white"
        localizer={localizer}
        defaultView={lastViewSaved as View}
        startAccessor="start"
        endAccessor="end"
        events={Events}
        style={{ height: window.innerHeight - 80 - 100 }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onSelectEvent={onSelect}
        onDoubleClickEvent={onDoubleClick}
        onView={onViewChanged}
      />
      <CreateEventModal
        visibility={modalVisibility}
        setVisibility={setModalVisibility}
        title="Crear evento"
        action={"newEvent"}
      />
    </div>
  );
};
