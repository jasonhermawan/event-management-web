import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../src/pages/Landing";
import EventPage from "../src/pages/EventPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import CreateEvent from "./pages/CreateEvent";
import Explore from "./pages/Explore";
import Checkout from "./pages/Checkout";
import ProfileUser from "./components/SidebarDash/Sidebar";
import MyTicketPage from "./pages/ProfileUser/MyTiketPage";
import ChooseRole from "./pages/ChooseRole";
import SignupPromotor from "./pages/SignupPromotor";
import ResetPass from "./pages/ResetPass";
import ForgotPass from "./pages/ForgotPass";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/choose-role" element={<ChooseRole/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-promotor" element={<SignupPromotor />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile-user/my-ticket" element={<MyTicketPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/reset-password" element={<ResetPass/>} />
      </Routes>
  );
}

export default App;
