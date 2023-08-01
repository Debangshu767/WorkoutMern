import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    
    if(!context){
        throw Error('Auth context  must be used inside a Authcontextprovider')
    }
    return context

}