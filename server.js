const express = require("express");
const supabase = require("@supabase/supabase-js");

const app = express();
app.use(express.json());

const PORT = 1111;

const SUPABASE_URL = "SUPABASE_URL";
const SUPABASE_SERVICE_ROLE =
  "SUPABASE_SERVICE_ROLE";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

app.get("/", async (req, res) => {
  const getPost = await db.from("COLLECTION").select();
  console.log(getPost);
  //   console.log("Main API endpoint accessed");
  //   res.send("This is Main Route");
  res.json({
    getPost,
  });
});

app.post("/", async (req, res) => {
  const { title, desc } = req.body;
  //   console.log(title, desc);
  const createPost = await db.from("COLLECTION").insert({ title, desc });
  console.log("~ app.post ~ create.post", createPost);
  res.json({ createPost });
});

app.get("/:username", (req, res) => {
  const { username } = req.params;
  console.log(username);
  res.send("This is Main Route");
});

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
