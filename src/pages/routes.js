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
  import { FinancialStatement } from "./Financial Statement";
  
export const AppRoutes = () => {
    return (

        <Routes>
            <Route index element={<Login />} />
            <Route path="home" element={<Home/>}/>
            <Route path="home/dashboard" component={<Dashboard />}/>
            <Route path="dashboard/stats" element={<FinancialStatement/>}/>
            <Route path="home/checkout" element={<Checkout/>}/>
            <Route path="home/about" element={<AboutUs/>}/>
            <Route path="signUp" element={<SignUp/>}/>
        </Routes>

    )
  }

  {/*<Route path='*' render={() => <Navigate to="/" />} />*/}
  
