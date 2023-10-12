import { Navigate, Route, Routes } from "react-router-dom";
import { routeAddr, routes } from "./routerData";
import { LandingPage } from "../pages/LandingPage";
import { useAuthStore } from "../hooks/useAuthStore";

export const AppRouter = () => {
  const { authState } = useAuthStore();

  return (
    <Routes>
      {routes[authState]}
      <Route path="/" element={<LandingPage />} />
      <Route path="/*" element={<Navigate to={routeAddr[authState]} />} />
    </Routes>
  );
};
