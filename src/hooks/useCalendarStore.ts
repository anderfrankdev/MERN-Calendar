import { useDispatch, useSelector } from "react-redux";
import { CalendarDispatchers, CalendarState, CalendarThunks } from "../types";
import reducers from "../store/calendar/calendarSlice";
import thunks from "../store/calendar/thunks";
import { mapObjIndexed } from "ramda";

export const useCalendarStore = () => {
  const calendarState: CalendarState = useSelector(
    (state: any) => state.calendar,
  );

  const dispatch = useDispatch();

  const ActionsToDispatchers =
    (value: Function) =>
    (...args: any) =>
      dispatch(value(...args));

  const calendarActions = mapObjIndexed(ActionsToDispatchers, reducers);

  const calendarThunks = mapObjIndexed(ActionsToDispatchers, thunks);

  return {
    ...calendarState,
    ...(calendarActions as CalendarDispatchers),
    ...(calendarThunks as CalendarThunks),
  };
};
