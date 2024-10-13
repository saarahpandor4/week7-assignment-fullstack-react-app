import { useEffect, useState } from "react";
// import PostForm from "./PostForm";

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await fetch("http://localhost:8080/posts");
      //MAKE SURE TO CHANGE THE ABOVE LOCALHOST LINK TO RENDER LINK WHEN DEPLOYING!
      const postsData = await response.json();
      setPosts(postsData);
    }
    getPosts();
  }, []);

  return (
    <>
      <h1> Posts</h1>
      <div id="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.guest_name}</h2>
            <p>{post.title}</p>
            <p>{post.description}</p>
            <p>{post.location}</p>
          </div>
        ))}
      </div>
    </>
  );
}
