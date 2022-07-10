import { useContext } from "react"
import { FormContext } from "../providers/Form"
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({ element: Element, onlyFor}) => {
    const { userToken, user } = useContext(FormContext)

    if(!userToken) {
        return <Navigate to='/'/>
    } else if(onlyFor && user.account !== onlyFor.access ) {
        return <Navigate to={onlyFor.path}/>
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
