import { createSlice } from "@reduxjs/toolkit";
import { AuthReducers, AuthState } from "../../types";

export const authSlice = createSlice<AuthState, AuthReducers, "auth">({
  name: "auth",
  initialState: {
    authState: "notAuthenticated",
    user: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.authState = "authenticated";
      state.user = payload;
    },
    logout: (state) => {
      state.authState = "notAuthenticated";
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export default {
  ...authSlice.actions,
};
