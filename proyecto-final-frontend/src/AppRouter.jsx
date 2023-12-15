import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./pages/HomePage";
import AllPostPage from "./pages/AllPostPage";
import PrivateRoutes from "./components/PrivateRoutes";
import NewPostPage from "./pages/NewPostPage";
import PostPage from "./pages/PostPage";
import NewCommentPage from "./pages/NewCommentPage";
import EditPostPage from "./pages/EditPostPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas Protegidas */}
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<AllPostPage />} />
        <Route path="/posts/new" element={<NewPostPage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="comment/:postId" element={<NewCommentPage />} />
        <Route path="posts/:postId/edit" element={<EditPostPage />} />
      </Route>

      {/* Rutas Públicas */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};
export default AppRouter;
