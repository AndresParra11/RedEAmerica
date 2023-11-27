import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import AuthApp from "../pages/layout/AuthApp";
import MyAccount from "../pages/MyAccount/MyAccount";
import FormRedEAmerica from "../pages/FormRedEAmerica/FormRedEAmerica";
import ListRedEAmerica from "../pages/ListRedEAmerica/ListRedEAmerica";
import VerificationAdvertiser from "../pages/VerificationAdvertiser/VerificationAdvertiser";
import PrivateRouter from "./PrivateRouter";
import { createContext, useState } from "react";
import DetailPost from "../pages/DetailPost/DetailPost";
import CreatePage from "../pages/Blog/BlogCreate/BlogCreate";

export const User = createContext({});

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <User.Provider value={{ isAuth, setIsAuth, user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home_auth" element={<AuthApp />} />
          <Route path="/create_blog" element={<CreatePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/form-redeamerica" element={<FormRedEAmerica />} />
          <Route path="/detailPost/:id" element={<DetailPost />} />

          <Route element={<PrivateRouter isAuthentication={isAuth} />}>
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/list-redeamerica" element={<ListRedEAmerica />} />
            <Route
              path="/detail-advertiser/:name"
              element={<VerificationAdvertiser />}
            />
          </Route>
        </Routes>
      </User.Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
