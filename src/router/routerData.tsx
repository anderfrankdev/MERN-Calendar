import { Route } from "react-router-dom"
import { CalendarPage } from "../calendar/pages/CalendarPage"
import { LoginPage } from "../auth/pages/LoginPage"

export const routes:any = {
    authenticated:<Route path="/app/*" element={<CalendarPage/>}/>,
    notAuthenticated:<Route path="/auth/*" element={<LoginPage/>}/>
}

export const routeAddr:any = {
    notAuthenticated:"/auth",
    authenticated:"/app"
}