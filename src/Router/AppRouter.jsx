import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import MyAccount from "../pages/MyAccount/MyAccount";
import FormRedEAmerica from "../pages/FormRedEAmerica/FormRedEAmerica";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/form-redeamerica" element={<FormRedEAmerica />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
