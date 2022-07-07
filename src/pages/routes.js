import {
    Routes,
    Route,
  } from "react-router-dom";

  import {Login } from "./Login";
  import { Home } from "./Home";
  import { Dashboard } from "./Dashboard";
  import { Statistics } from "./Statistics";
  import { Checkout } from "./Checkout";
  import { AboutUs } from "./AboutUs";
  import { SignUp } from "./SignUp";
  
export const AppRoutes = () => {
    return (

        <Routes>
<<<<<<< HEAD
            <Route index element={<Login />} />
            <Route path="home" element={<Home/>}/>
            <Route path="dashboard" component={<Dashboard />}/>
            <Route path="stats" element={<Statistics/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="about" element={<AboutUs/>}/>
            <Route path="signUp" element={<SignUp/>}/>
=======
            <Route path="signUp" element={<SignUp/>}/>
            <Route path="/" element={<Login />}/>

                <Route path="home" element={<Home/>}>
                        <Route path="dashboard" element={<Dashboard/>}>
                                <Route path="stats" element={<Statistics/>}/>
                        </Route>
                        <Route path="checkout" element={<Checkout/>}/>
                        <Route path="about" element={<AboutUs/>}/>
                </Route>
                
>>>>>>> d4bfa89b75d68f5bec07b48f1469cd4736a9de04
        </Routes>

    )
  }

  {/*<Route path='*' render={() => <Navigate to="/" />} />*/}
  
