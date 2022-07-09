import { useContext } from "react"
import { FormContext } from "../providers/Form"
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({ element: Element}) => {
    const { userToken } = useContext(FormContext)

    if(!userToken) {
        return <Navigate to='/'/>
    }

    return (
        <>
        {Element}
        </>
    )
}

export const NonProtectedRoute = ({ element: Element}) => {
    const { userToken, user } = useContext(FormContext)

    if(userToken) {
        if(user.account === 'seller') {
        return <Navigate to='/home/dashboard'/>

      } else {
        return <Navigate to='/home'/>
      }
    }

    return (
        <>
        {Element}
        </>
    )
}
