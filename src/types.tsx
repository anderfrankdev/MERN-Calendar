import { AnyAction } from "@reduxjs/toolkit";

export interface EventStruc {
  id:string
  title: string;
  notes?: string;
  start: string;
  end: string;
  user?: {
    _id: string;
    name: string;
  };
}

export interface UiData {
  isDateModalOpen: boolean;
}

export interface UiMethods{
  onOpenDateModal: () => {
      payload: undefined;
      type: "ui/onOpenDateModal";
  };
  onCloseDateModal: () => {
      payload: undefined;
      type: "ui/onCloseDateModal";
  };
}
export interface CalendarState{
  events: EventStruc[];
  activeEvent: EventStruc|null;
  isLoadingEvents: boolean;
  messageSaved: string;
  messageDeleted: string;
  messageError: string;
  messageErrorDelete: string;
}


export interface CalendarReducers {
  [key: string]: (state: CalendarState, { payload }: { payload: any }) => void;
  onSetActiveEvent: (state: CalendarState, { payload }: { payload: EventStruc }) => void;
  onAddNewEvent: (state: CalendarState, { payload }: { payload: EventStruc }) => void;
  onUpdateEvent: (state: CalendarState, { payload }: { payload: EventStruc }) => void;
  onDeleteEvent: (state: CalendarState) => void;
  onLoadingEvents: (state: CalendarState, { payload }: { payload: boolean }) => void;
  onSetMessageSaved: (state: CalendarState, { payload }: { payload: string }) => void;
  onSetMessageDeleted: (state: CalendarState, { payload }: { payload: string }) => void;
  onSetMessageError: (state: CalendarState, { payload }: { payload: string }) => void;
  onSetMessageErrorDelete: (state: CalendarState, { payload }: { payload: string }) => void;
}

export interface CalendarDispatchers {
  [key: string]: (...args:any) => AnyAction;
  onSetActiveEvent: (...args:any) => AnyAction;
  onAddNewEvent: (...args:any) => AnyAction;
  onUpdateEvent: (...args:any) => AnyAction;
  onDeleteEvent: (...args:any) => AnyAction;
  onLoadingEvents:      (...args:any) => AnyAction;
  onSetMessageSaved:    (...args:any) => AnyAction;
  onSetMessageDeleted:  (...args:any) => AnyAction;
  onSetMessageError:       (...args:any) => AnyAction;
  onSetMessageErrorDelete: (...args:any) => AnyAction;
}
export interface CalendarThunks {
  [key: string]: (...args:any) => AnyAction;
  startSavingEvent: (...args:any) => AnyAction;
  startUpdatingEvent: (...args:any) => AnyAction;
  startDeletingEvent: () => AnyAction;
}