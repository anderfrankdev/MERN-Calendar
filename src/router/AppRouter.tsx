import { Navigate, Route, Routes } from "react-router-dom";
import { routeAddr, routes } from "./routerData";
import { LandingPage } from "../pages/LandingPage";

export const AppRouter = () => {
  const authStatus: string = "authenticated";

  return (
    <Routes>
      {routes[authStatus]}
      <Route path="/" element={<LandingPage />} />
      <Route path="/*" element={<Navigate to={routeAddr[authStatus]} />} />
    </Routes>
  );
};
