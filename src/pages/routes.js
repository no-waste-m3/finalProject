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
import NotFound from "./NotFound";
import { motion } from "framer-motion";


  
export const AppRoutes = () => {

  const animation = {width:"100%", transition: {duration: 0.7}}

  const initial={width:0}
        
  const exit={x: window.innerWidth, transition: {duration: 0.5}}

    return (

        <Routes>
            <Route index element={<NonProtectedRoute element={<Login />}/>} />
            <Route path="home" element={<ProtectedRoute /*onlyFor={{access: 'buyer', path:'/home/dashboard'}}*/ element={<motion.div initial={initial} exit={exit} animate={animation}><Home/></motion.div>}/>}/>
            <Route path="home/dashboard" element={<ProtectedRoute onlyFor={{access: 'seller', path:'/home'}} element={<motion.div initial={initial} exit={exit} animate={animation}><Dashboard /></motion.div>}/>}/>
            <Route path="home/dashboard/stats" element={<ProtectedRoute element={<motion.div initial={initial} exit={exit} animate={animation}><FinancialStatement/></motion.div>}/>}/>
            <Route path="home/checkout" element={<ProtectedRoute element={<motion.div initial={initial} exit={exit} animate={animation}><Checkout/></motion.div>}/>}/>
            <Route path="home/about" element={<motion.div initial={initial} exit={exit} animate={animation}><AboutUs/></motion.div>}/>
            <Route path="signUp" element={<NonProtectedRoute element={<motion.div initial={initial} exit={exit} animate={animation}><SignUp/></motion.div>}/>}/>
            <Route path="*" element={<motion.div initial={initial} exit={exit} animate={animation}><NotFound/></motion.div>} />
        </Routes>

    )
  }

  {/*<Route path='*' render={() => <Navigate to="/" />} />*/}
  
