import "./App.css";
import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import LandingPage from "../src/pages/Landing";
import EventPage from "../src/pages/EventPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import CreateEvent from "./pages/CreateEvent";
import Explore from "./pages/Explore";
import Checkout from "./pages/Checkout";
import MyTicketPage from "./pages/ProfileUser/MyTiketPage";
import ChooseRole from "./pages/ChooseRole";
import SignupPromotor from "./pages/SignupPromotor";
import ResetPass from "./pages/ResetPass";
import ForgotPass from "./pages/ForgotPass";
import PromotorPage from './pages/PromotorPage'
import ScrollToTop from './components/ScrollToTop'
import BasicInformation from "./pages/ProfileUser/BasicInformation";
import Password from "./pages/ProfileUser/Password";
import SuccesPayment from "./pages/SuccesPayment/SuccesPayment";
import NotFound from "./pages/NotFound";


function App() {
  return (
      <div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/choose-role" element={<ChooseRole/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-promotor" element={<SignupPromotor />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile-user/my-ticket" element={<MyTicketPage />} />
          <Route path='/event/:eventname/:eventid' element={<EventPage />}/>
          <Route path="/explore" element={<Explore />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/payment-succes" element={<SuccesPayment />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/reset-password" element={<ResetPass/>} />
          <Route path='/promotor/:name/:id' element={<PromotorPage />}/>
          <Route path='/profile-user/basic-information' element={<BasicInformation />}/>
          <Route path='/profile-user/password' element={<Password />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
  );
}

export default App;
