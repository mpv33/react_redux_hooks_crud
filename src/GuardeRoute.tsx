import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
const GuardedRoute = (props:any) => {
    const { component: Component, auth, ...rest } = props
    const alert = ()=>{
       return  toast.warning("Please LogIn First !!");
    }
console.log("auth:" + auth)
    return(
        <Route {...rest} render={(props) => (
            auth === true
                ? <Component {...props} />
                : <>
                 {alert()}
                 <Redirect to='/' />
                 </>
        )} />
    )
}

export default GuardedRoute;