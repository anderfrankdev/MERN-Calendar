import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { EventStruc } from "../../types";
import { onCloseDateModal } from "../ui/uiSlice";
import actions from "../calendar/calendarSlice";
import authActions from "../auth/authslice";
import { LazyQueryExecFunction, OperationVariables } from "@apollo/client";

export const startSavingEvent =
  (
    event: EventStruc,
    createEvent: LazyQueryExecFunction<any, OperationVariables>,
  ) => async (dispatch: Dispatch<AnyAction>) => {
    const token = localStorage.getItem('token')
    dispatch(onCloseDateModal());

    //Enviar event en el backend
    const { data } = await createEvent({ variables: { ...event,token} });
    const { ok,message,event:{id} } = data?.createEvent || { ok: false };
    //guardamos si todo esta bien
    if(message==="Token expired") {
      dispatch(authActions.logout())
    }
    if(ok){
      event.id=id
      dispatch(actions.onAddNewEvent(event));
      dispatch(actions.onSetMessageSaved(message))
      //Cerramos el modal
    }
    if(ok===false){
      dispatch(actions.onSetMessageError(message))
    }
  };
export const startUpdatingEvent =
(
  event: EventStruc,
  updateEvent: LazyQueryExecFunction<any, OperationVariables>,
) => async (dispatch: Dispatch<AnyAction>) => {
  const token = localStorage.getItem('token')
  dispatch(onCloseDateModal());

  //Enviar event en el backend
  console.log(event)
  
  const { data } = await updateEvent({ variables: {...event ,token} });
  console.log(data)
  const { ok,message} = data?.updateEvent || { ok: false };
  //guardamos si todo esta bien
  if(message==="Token expired") {
    dispatch(authActions.logout())
  }
  if(ok){
    dispatch(actions.onUpdateEvent(event));
    dispatch(actions.onSetMessageSaved(message))
    //Cerramos el modal
  }
  if(ok===false){
    dispatch(actions.onSetMessageError(message))
  }

};
export const startDeletingEvent =
(
  event: EventStruc,
  deleteEvent: LazyQueryExecFunction<any, OperationVariables>,
) => async (dispatch: Dispatch<AnyAction>) => {
  const token = localStorage.getItem('token')

  //Enviar event en el backend
  console.log(event.id)
  
  const { data } = await deleteEvent({ variables: { eventId: event.id,token} });
  const { ok,message } = data?.deleteEvent || { ok: false };
  //guardamos si todo esta bien
  if(message==="Token expired") {
    dispatch(authActions.logout())
  }
  if(ok){
    dispatch(actions.onDeleteEvent());
    dispatch(actions.onSetMessageDeleted(message))
    //Cerramos el modal
  }
  if(ok===false){
    dispatch(actions.onSetMessageErrorDelete(message))
  }
};
export default {
  startSavingEvent,
  startUpdatingEvent,
  startDeletingEvent,
};
