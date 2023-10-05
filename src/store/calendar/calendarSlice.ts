import { createSlice } from "@reduxjs/toolkit";
import { CalendarReducers, CalendarState } from "../../types";
import { addHours } from "date-fns";

const tempEvent={
     id:"12313213",
     title: "All Day Event very long title",
     notes: "Somenotes",
     bgColor: "#00c853",
     start: addHours(new Date(), -2).toJSON(),
     end: addHours(new Date(), 2).toJSON(),
     user: {
       _id: "1",
       name: "Juan",
     },
}

export const calendarSlice = createSlice<CalendarState,CalendarReducers,"calendar">({
     name: 'calendar',
     initialState: {
          events: [tempEvent],
          activeEvent: null,
          isLoadingEvents: true,
          messageSaved: "",
          messageDeleted: "",
          messageError: "",
          messageErrorDelete: ""
    },
    reducers: {
          onSetActiveEvent: (state, { payload }) => {
               state.activeEvent = payload;
          },
          onAddNewEvent: (state, { payload }) => {
               (state.events as any).push(payload);
               state.activeEvent = null;
          },
          onUpdateEvent: (state, { payload }) => {
               state.events = state.events.map(event => {
                    if (event.id === payload.id) {
                         return payload;
                    }
                    return event;
               });
               state.activeEvent = null;
          },
          onDeleteEvent: (state) => {
               if (state.activeEvent) {
                    state.events = state.events.filter(event => event.id !== state.activeEvent!.id);
                    state.activeEvent = null;
               }
        },
        onLoadingEvents: (state, { payload }) => {
            state.isLoadingEvents = payload;
        },
        onSetMessageSaved: (state, { payload }) => {
            state.messageSaved = payload;
        },
        onSetMessageDeleted: (state, { payload }) => {
            state.messageDeleted = payload;
        },
        onSetMessageError: (state, { payload }) => {
            state.messageError = payload;
        },
        onSetMessageErrorDelete: (state, { payload }) => {
            state.messageErrorDelete = payload;
        },
    }
})

export default { 
     ...calendarSlice.actions  
}
