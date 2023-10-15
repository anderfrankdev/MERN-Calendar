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

    //Enviar event en el backend
    const { data } = await createEvent({ variables: { ...event,token} });
    const { ok,message } = data?.createEvent || { ok: false };
    //guardamos si todo esta bien
    if(message==="Token expired") {
      dispatch(authActions.logout())
    }
    if(ok){
      dispatch(actions.onAddNewEvent(event));
      dispatch(actions.onSetMessageSuccess(message))
      //Cerramos el modal
    }
    if(ok===false){
      dispatch(actions.onSetMessageError(message))
    }
    dispatch(onCloseDateModal());
  };
export const startUpdatingEvent =
  (event: EventStruc) => async (dispatch: Dispatch<AnyAction>) => {
    //Enviar event en el backend

    //guardamos si todo esta bien
    dispatch(actions.onUpdateEvent(event));
    //Cerramos el modal
    dispatch(onCloseDateModal());

    //const result = await signInWithGoogle();

    //result.ok ? dispatch(login(result)) : dispatch(logout(result));
    //console.log(result);
    //console.log(getState());
  };
export const startDeletingEvent =
  () => async (dispatch: Dispatch<AnyAction>) => {
    //Enviar event en el backend

    //guardamos si todo esta bien
    dispatch(actions.onDeleteEvent());

    //const result = await signInWithGoogle();

    //result.ok ? dispatch(login(result)) : dispatch(logout(result));
    //console.log(result);
    //console.log(getState());
  };
export default {
  startSavingEvent,
  startUpdatingEvent,
  startDeletingEvent,
};
