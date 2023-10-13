import { Navigate, Route, Routes } from "react-router-dom";
import { routeAddr, routes } from "./routerData";
import { LandingPage } from "../pages/LandingPage";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import { useCheckSession } from "../hooks/useCheckSession";
import { LoadingPage } from "../pages/LoadingPage";

export const AppRouter = () => {
  const { authState } = useAuthStore();
  const {checkSession, loading} = useCheckSession()
  
  useEffect(()=>{
    if(authState==="notAuthenticated") checkSession()
  },[])
  
  if(loading) return LoadingPage
  
  return (
    <Routes>
      {routes[authState]}
      <Route path="/" element={<LandingPage />} />
      <Route path="/*" element={<Navigate to={routeAddr[authState]} />} />
    </Routes>
  );
};
