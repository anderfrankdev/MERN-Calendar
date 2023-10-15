import { useMutation } from "@apollo/client";
import { REFRESH_JWT } from "../graphql/mutations";

export const useRefreshToken = () => {
    const [refreshJwt,{loading,data,error}] = useMutation(REFRESH_JWT)
    console.log(data,error)
    const token = localStorage.getItem('token')

    if(!token) return {loading:false,refreshToken:()=>{}};

    return {
        loading,
        refreshToken:async () => { 
            const {data} = await refreshJwt({variables:{token}})
            if(!data.refreshJwt.ok) return
            
            localStorage.setItem("token",data.refreshJwt.token)
        }
    }

};
