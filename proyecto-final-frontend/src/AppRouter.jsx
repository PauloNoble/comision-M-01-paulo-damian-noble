import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* {Rutas Protegidas}
      <Route element={<PrivateRoutes />}></Route> */}

      {/*Rutas Públicas*/}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/posts" element={<PostPage />} />
    </Routes>
  );
};
export default AppRouter;
