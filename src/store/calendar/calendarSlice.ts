import { createSlice } from "@reduxjs/toolkit";
import { CalendarReducers, CalendarState } from "../../types";

export const calendarSlice = createSlice<
  CalendarState,
  CalendarReducers,
  "calendar"
>({
  name: "calendar",
  initialState: {
    events:[],
    activeEvent: null,
    isLoadingEvents: true,
    messageSaved: "",
    messageDeleted: "",
    messageError: "",
    messageErrorDelete: "",
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
      state.events = state.events.map((event) => {
        if (event.id === payload.id) {
          return payload;
        }
        return event;
      });
      state.activeEvent = null;
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event.id !== state.activeEvent!.id,
        );
        state.activeEvent = null;
      }
    },
    onLoadingEvents: (state) => {
      state.isLoadingEvents = true;
    },
    onSetEvents: (state, { payload }) => {
      state.events = payload;
      state.isLoadingEvents = false;
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
  },
});

export default {
  ...calendarSlice.actions,
};
