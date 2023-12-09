import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import PrivateRoutes from "./components/PrivateRoutes";
import NewPostPage from "./pages/NewPostPage";
import CommentPage from "./pages/CommentPage";
import NewCommentPage from "./pages/NewCommentPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas Protegidas */}
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/posts/new" element={<NewPostPage />} />
        <Route path="/posts/:postId" element={<CommentPage />} />
        <Route path="comment/:postId" element={<NewCommentPage />} />
      </Route>

      {/* Rutas Públicas */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};
export default AppRouter;
