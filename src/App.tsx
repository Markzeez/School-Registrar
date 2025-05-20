import { Routes, Route } from "react-router-dom";
import Landing from "../src/Pages/Landing/Index";
import Page404 from "../src/Pages/Page404";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Notification from "./Pages/Notification/Notification";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import VerifyOTP from "./Pages/Auth/VerifyOTP";
import Signup from "./Pages/Auth/Signup";
import ProfileForm from "./Pages/Profile/ProfileForm";
import Login from "./Pages/Auth/Login";
import ForgettenPassword from "./Pages/Auth/ForgettenPassword";
import Logout from "./Pages/Auth/Logout";
import SideBar from "./Pages/Sidebar/Sidebar";
import AttendanceList from "./Pages/Attendance/AttendanceList";
import DashBoard from "./Pages/Dashboard/RootLayout"
import Dashboard from "./Pages/Dashboard/RootLayout";
import AddPayment from "./Pages/Payment/PaymentMethod";
import RegisterProcess from "./Pages/Auth/StudentRegister";
import StudentRegister from "./Pages/Auth/StudentRegister";
import TeacherRegister from "./Pages/Auth/TeacherRegister";
import AnimatedButton from "./Component/AnimatedButton";
import CreateReview from "./Component/CreateReview";
import Home from "./Pages/Home/Home";
import InputSearch from "./Pages/Search/InputSearch";
import Loading from "./Component/Loading";





function App() {
  // const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("G_A_token")) {
      // if (location.pathname !== ("/" || "/search")) {
      //   window.location.replace("/");
      // }
      console.log("no_token");
    } else {
      async () => {
        try {
          const decoded = jwtDecode(`${localStorage.getItem("G_A_token")}`);

          const tokenExpDate = decoded.exp;
          const currentDate = new Date() / 1000;
          if (tokenExpDate! < currentDate) {
            const response = await axios.post(
              `${import.meta.env.VITE_GOUFER_TEST_API}/token/refresh`,
              { refresh: localStorage.getItem("G_R_token") }
            );
            if (response.data) {
              localStorage.setItem(response.data.refresh, "G_R_token");
              localStorage.setItem(response.data.access, "G_A_token");
            }
            return response.data;
          }
        } catch (error) {
          console.error(error);
          return error;
        }
      };
    }
  }, []);

  return (
    <>
      <Routes>
        <Route index path={PUBLIC_ROUTES.LANDINGPAGE} element={<Landing />} />
        <Route path={PUBLIC_ROUTES.HOME} element={<Home/>}/>
        <Route path={PUBLIC_ROUTES.NOTIFICATION} element={<Notification/>} />
        <Route path={PUBLIC_ROUTES.ABOUT_US} element={<AboutUs />} />
        <Route path={PUBLIC_ROUTES.CONTACT_US} element={<ContactUs />} />
        <Route path={PUBLIC_ROUTES.SIGNUP} element={<Signup />} />
        <Route path={PUBLIC_ROUTES.DASHBOARD} element={<Dashboard/>} />
        <Route path={PUBLIC_ROUTES.PROFILE} element={<ProfileForm />} />
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        <Route path={PUBLIC_ROUTES.DASHBOARD} element={<Dashboard/>}/>
        
        <Route path={"/Otp"} element={<VerifyOTP/>} />
        <Route path={"/search"} element={<InputSearch/>}/>
        <Route path={"/loading"} element={<Loading/>} />

        <Route path={"/for"} element={<ForgettenPassword/>} />
        <Route path={"/logout"} element={<Logout />} />
        <Route path={"pay"} element={<AddPayment/>}/>
        <Route path={"button"} element={<AnimatedButton/>} />
        <Route path={"review"} element={<CreateReview/>} />
        
        <Route path={"/attendance"} element={<AttendanceList/>} />
        <Route path={"sidebar"} element={<SideBar/>}/>
        
       <Route path={"reg"} element={<StudentRegister/>} />
       <Route path={"regs"} element={<TeacherRegister/>} />


        {/* <Route path={"/verify_email"} element={<Verifyemail />} />
        <Route path={"/successCard"} element={<SuccessCard />} />
        <Route path={"/failedCard"} element={<FailedCard />} /> */}
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
