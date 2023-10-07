import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { EventStruc } from "../../types";
import { onCloseDateModal } from "../ui/uiSlice";
import actions from "../calendar/calendarSlice"

export const startSavingEvent = (event:EventStruc) => 
async (dispatch:Dispatch<AnyAction>) => {

    //Enviar event en el backend

    //guardamos si todo esta bien
    dispatch(actions.onAddNewEvent(event))
    //Cerramos el modal
    dispatch(onCloseDateModal());

    //const result = await signInWithGoogle();

    //result.ok ? dispatch(login(result)) : dispatch(logout(result));
    //console.log(result);
    //console.log(getState());

};
export const startUpdatingEvent = (event:EventStruc) => 
async (dispatch:Dispatch<AnyAction>) => {

    //Enviar event en el backend

    //guardamos si todo esta bien
    dispatch(actions.onUpdateEvent(event))
    //Cerramos el modal
    dispatch(onCloseDateModal());

    //const result = await signInWithGoogle();

    //result.ok ? dispatch(login(result)) : dispatch(logout(result));
    //console.log(result);
    //console.log(getState());

};
export const startDeletingEvent = (event:EventStruc) => 
async (dispatch:Dispatch<AnyAction>) => {

    //Enviar event en el backend

    //guardamos si todo esta bien
    dispatch(actions.onDeleteEvent())

    //const result = await signInWithGoogle();

    //result.ok ? dispatch(login(result)) : dispatch(logout(result));
    //console.log(result);
    //console.log(getState());

};
export default {
    startSavingEvent,
    startUpdatingEvent,
    startDeletingEvent
}