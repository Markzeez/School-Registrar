// External Packages
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Utility
import PUBLIC_ROUTES from "./utils/PublicRoutes";

// Pages
import Landing from "./Pages/Landing/Index";
import Page404 from "./Pages/Page404";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Notification from "./Pages/Notification/Notification";
import VerifyOTP from "./Pages/Auth/VerifyOTP";
import Signup from "./Pages/Auth/Signup";
import ProfileForm from "./Pages/Profile/ProfileForm";
import Login from "./Pages/Auth/Login";
import ForgettenPassword from "./Pages/Auth/ForgettenPassword";
import VerifyEmail from "./Pages/Auth/VerifyEmail";
import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/About";
import TermCondition from "./Pages/TermsAndConditions.tsx/TermCondition";

// Dashboard & Sidebar
import RootLayout from "./Pages/Dashboard/RootLayout";
import SideBar from "./Pages/Sidebar/Sidebar";
import SideNav from "./Pages/Sidebar/SideNav";

// Attendance & Parent Dashboard
import AttendanceList from "./Pages/Attendance/AttendanceList";
import ParentDashboard from "./Pages/Attendance/ParentDashBoard";

// Payment
import DeclinedPAyment from "./Pages/Payment/DeclinedPAyment";
import ReceiptPayment from "./Pages/Payment/ReceiptPayment";

// Components
import AnimatedButton from "./Component/AnimatedButton";
import CreateReview from "./Component/CreateReview";
import Loading from "./Component/Loading";
import InputSearch from "./Pages/Search/InputSearch";
import Chart from "./Pages/Chart/Chart";

function App() {
  useEffect(() => {
    const checkAndRefreshToken = async () => {
      const accessToken = localStorage.getItem("G_A_token");
      const refreshToken = localStorage.getItem("G_R_token");

      if (!accessToken) {
        console.log("No token found.");
        return;
      }

      try {
        const decoded = jwtDecode<{ exp: number }>(accessToken);
        const isExpired = decoded.exp < Date.now() / 1000;

        if (isExpired && refreshToken) {
          const response = await axios.post(
            `${import.meta.env.VITE_ClassPulse_TEST_API}/token/refresh`,
            { refresh: refreshToken }
          );

          const { access, refresh } = response.data;
          localStorage.setItem("G_A_token", access);
          localStorage.setItem("G_R_token", refresh);
        }
      } catch (error) {
        console.error("Token refresh error:", error);
      }
    };

    checkAndRefreshToken();
  }, []);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route index path={PUBLIC_ROUTES.LANDINGPAGE} element={<Landing />} />
        <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={PUBLIC_ROUTES.NOTIFICATION} element={<Notification />} />
        <Route path={PUBLIC_ROUTES.ABOUT_US} element={<About />} />
        <Route path={PUBLIC_ROUTES.CONTACT_US} element={<ContactUs />} />
        <Route path={PUBLIC_ROUTES.SIGNUP} element={<Signup />} />
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        <Route path={PUBLIC_ROUTES.PROFILE} element={<ProfileForm />} />
        <Route path={PUBLIC_ROUTES.TERMS_AND_CONDITIONS} element={<TermCondition />} />
        <Route path="/verify_email" element={<VerifyEmail />} />

        {/* Auth / OTP */}
        <Route path="/Otp" element={<VerifyOTP />} />
        <Route path="/for" element={<ForgettenPassword />} />

        {/* Dashboard & Sidebar */}
        <Route path="/dash" element={<RootLayout />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/side" element={<SideNav />} />

        {/* Attendance */}
        <Route path="/attendance" element={<AttendanceList />} />
        <Route path="/parent" element={<ParentDashboard />} />

        {/* Payment */}
        <Route path="/suc" element={<ReceiptPayment />} />
        <Route path="/failed" element={<DeclinedPAyment />} />

        {/* Components */}
        <Route path="/button" element={<AnimatedButton />} />
        <Route path="/review" element={<CreateReview />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/search" element={<InputSearch />} />
        <Route path="/chart" element={<Chart />} />

        {/* 404 Fallback */}
        <Route path="*" element={<Page404 />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
