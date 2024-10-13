import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Link to="/">
        <i className="fa-solid fa-house"></i> Home
      </Link>

      <br />

      <Link to="/posts">
        <i className="fa-solid fa-signs-post"></i>Posts
      </Link>

      <br />
      <Link to="/new-post">
        <i className="fa-solid fa-plus"></i>Create Post
      </Link>

      <br />
      <Link to="/comments">
        <i className="fa-solid fa-comment"></i>Comments
      </Link>
    </>
  );
}
