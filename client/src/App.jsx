import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PostsPage from "./components/PostsPage";
import CommentForm from "./components/CommentForm";
import PostForm from "./components/PostForm";
import NavBar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <>
          <Route path="/" element={<HomePage />} />

          <Route path="/posts" element={<PostsPage />} />

          <Route path="/Comments" element={<CommentForm />} />

          <Route path="/new-post" element={<PostForm />} />
        </>
      </Routes>
    </div>
  );
}
