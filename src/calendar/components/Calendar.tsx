import { Calendar as BigCalendar, View } from "react-big-calendar";
import { localizer } from "../helpers/calendarLocalize";
import { EventStruc } from "../../types";
import { CalendarEvent } from "./CalendarEvent";
import { CreateEventModal } from "./CreateEventModal";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { AddNewButton } from "./AddNewEventButton";
import { clone } from "ramda";
import { DeleteEventButton } from "./DeleteEventButton";

export const Calendar = () => {
  const lastViewSaved = localStorage.getItem("lastview") || "month";

  const { isDateModalOpen, onCloseDateModal, onOpenDateModal } = useUiStore();

  const { events, onSetActiveEvent } = useCalendarStore();
  const eventStyleGetter = (
    event: EventStruc,
    start: Date,
    end: Date,
    isSelected: boolean,
  ) => {
    console.log({ event, start, end, isSelected });

    return {};
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
        events={events.map((e) => {
          const a: any = clone(e);
          a.end = new Date(e.end);
          a.start = new Date(e.start);
          return a;
        })}
        style={{ height: "calc(100vh - 72px - 80px)" }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onSelectEvent={(event) =>
          onSetActiveEvent(JSON.parse(JSON.stringify(event)))
        }
        onDoubleClickEvent={onOpenDateModal}
        onView={onViewChanged}
      />
      <CreateEventModal
        title="Crear evento"
        action={"newEvent"}
        isModalOpen={isDateModalOpen}
        onCloseModal={onCloseDateModal}
      />
      <AddNewButton />
      <DeleteEventButton />
    </div>
  );
};
