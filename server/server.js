import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({ connectionString: dbConnectionString });

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`RUNNING ON port ${PORT}`);
});

app.get("/", (req, res) =>
  res.json({
    message: "You are looking at my root route. How rude!",
  })
);

app.get("/posts", async (req, res) => {
  try {
    const postsData = await db.query(`SELECT * FROM posts;`);
    console.log(postsData);

    //res.json(postsData.rows);
    res.status(200).json(postsData.rows);
  } catch (error) {
    console.error("This is a fatal error! How dramatic!", error);
    res.status(500).json({ success: false });
  }
});

//GET comments for specific posts

app.get("/Comments", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(`SELECT * FROM comments WHERE post_id = $1`, [
      id,
    ]);
    res.status(200).json(result.rows);
    console.log(comments);
  } catch (error) {
    console.error("This is a fatal error! How dramatic!", error);
    res.status(500).json({ success: false });
  }
});

//post a new post

app.post("/addPosts", async (req, res) => {
  try {
    const { guest_name, title, description, location } = req.body;

    const newPost = await db.query(
      `INSERT INTO posts (guest_name, title, description, location) VALUES ($1, $2, $3, $4)`,
      [guest_name, title, description, location]
    );
    res.status(200).json(newPost.rows);
  } catch (error) {
    console.error(
      "This is a fatal error! How dramatic! You cannot add a new post",
      error
    );
    res.status(500).json({ success: false });
  }
});

//post a new comment

app.post("/Comments", async (req, res) => {
  try {
    const { comment_text, commenter_name } = req.body;
    const newComment = await db.query(
      `INSERT INTO comments (comment_text, commenter_name) VALUES ($1, $2)`,
      [comment_text, commenter_name]
    );
    res.status(200).json(newComment.rows);
  } catch (error) {
    console.error(
      "This is a fatal error! How dramatic! You cannot add a new comment",
      error
    );
    res.status(500).json({ success: false });
  }
});
