import { useLazyQuery } from "@apollo/client";
import { GETUSERDATA } from "../graphql/queries";
import { useDispatch } from "react-redux";
import actions from "../store/auth/authslice";
import calendarActions from "../store/calendar/calendarSlice";

export const useCheckSession = () => {
    const [getUserData,{loading}] = useLazyQuery(GETUSERDATA)
    const dispatch = useDispatch();

    const token = localStorage.getItem('token')

    if(!token) return {loading:false,checkSession:()=>{}};

    return {
        loading,
        checkSession:async () => { 
            const {data} = await getUserData({variables:{token}})
            if(!data.getUserData.ok) return localStorage.removeItem("token")
            dispatch(actions.login(data.getUserData.user));
            dispatch(calendarActions.onSetEvents(data.getUserData.user.events));
        }
    }

};
