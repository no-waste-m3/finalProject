import {
    Routes,
    Route,
  } from "react-router-dom";

  import {Login } from "./Login";
  import { Home } from "./Home";
  import { Dashboard } from "./Dashboard";
  import { Checkout } from "./Checkout";
  import { AboutUs } from "./AboutUs";
  import { SignUp } from "./SignUp";
  import { FinancialStatement } from "./FinancialStatement";
  import { ProtectedRoute, NonProtectedRoute } from "./route"


  
export const AppRoutes = () => {

    return (

        <Routes>
            <Route index element={<NonProtectedRoute element={<Login />}/>} />
            <Route path="home" element={<ProtectedRoute /*onlyFor={{access: 'buyer', path:'/home/dashboard'}}*/ element={<Home/>}/>}/>
            <Route path="home/dashboard" element={<ProtectedRoute onlyFor={{access: 'seller', path:'/home'}} element={<Dashboard />}/>}/>
            <Route path="home/dashboard/stats" element={<ProtectedRoute element={<FinancialStatement/>}/>}/>
            <Route path="home/checkout" element={<ProtectedRoute element={<Checkout/>}/>}/>
            <Route path="home/about" element={<AboutUs/>}/>
            <Route path="signUp" element={<NonProtectedRoute element={<SignUp/>}/>}/>
        </Routes>

    )
  }

  {/*<Route path='*' render={() => <Navigate to="/" />} />*/}
  
