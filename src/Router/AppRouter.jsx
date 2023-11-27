import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import AuthApp from "../pages/layout/AuthApp";
import CreatePage from "../pages/Blog/CreateBlog/CreateBlog";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home_auth" element={<AuthApp />} />
        <Route path="/create_blog" element={<CreatePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover-password" element={<ForgetPassword />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
