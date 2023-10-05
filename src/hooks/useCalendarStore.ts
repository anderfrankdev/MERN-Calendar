import { useDispatch, useSelector } from "react-redux"
import { CalendarDispatchers, CalendarState, } from "../types"
import reducers from "../store/calendar/calendarSlice"
import { mapObjIndexed } from "ramda"

export const useCalendarStore = () => {
    const calendarState:CalendarState = useSelector((state:any) => state.calendar)
    
    const dispatch = useDispatch()

    const reducersToEventHandlers = (value:Function) => 
        (...args:any) => dispatch(value(...args))
    
    const calendarActions = mapObjIndexed(reducersToEventHandlers,reducers) 

    return {
        ...calendarState,
        ...calendarActions as CalendarDispatchers
    }

}