import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import actions from "../auth/authslice";
import calendarActions from "../calendar/calendarSlice";

import { LazyQueryExecFunction, OperationVariables } from "@apollo/client";

export const startLogin =
  (
    user: { email: string; password: string; uid: string; fullname: string },
    login: LazyQueryExecFunction<any, OperationVariables>,
  ) =>
  async (dispatch: Dispatch<AnyAction>) => {
    dispatch(calendarActions.onLoadingEvents());

    //Enviar credenciales al backend
    const { data } = await login({ variables: { ...user } });
    const { ok, token, user: userData } = data.login;
    //guardamos si todo esta bien
    if (ok) {
      dispatch(actions.login(userData));
      dispatch(calendarActions.onSetEvents(userData.events));
      localStorage.setItem("token", token);
    }
    // console.log(user,data.result);
    //Cerramos el modal

    //const result = await signInWithGoogle();

    //result.ok ? dispatch(login(result)) : dispatch(logout(result));
    //console.log(result);
    //console.log(getState());
  };
export default {
  startLogin,
};
