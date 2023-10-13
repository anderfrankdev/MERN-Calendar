import { useDispatch, useSelector } from "react-redux";
import { AuthState, AuthDispatchers } from "../types";
import reducers from "../store/auth/authslice";
import thunks from "../store/auth/thunks";
import {  mapObjIndexed } from "ramda";

 
export const useAuthStore = () => {
  const authState: AuthState = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const ActionsToDispatchers =
    (value: Function) =>
    (...args: any) =>
      dispatch(value(...args));

  const authActions = mapObjIndexed(ActionsToDispatchers, reducers);

  const authThunks = mapObjIndexed(ActionsToDispatchers, thunks);

  return {
    ...authState,
    ...{...authActions,...authThunks} as AuthDispatchers,
  };
};
