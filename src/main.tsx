import React from "react";
import ReactDOM from "react-dom/client";
import CalendarApp from "./CalendarApp.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CalendarApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
