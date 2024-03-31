const express = require("express");
const supabase = require("@supabase/supabase-js");

const app = express();
app.use(express.json());

const PORT = 3211;

const SUPABASE_URL = "https://odelmzquaspadrwzdfzs.supabase.co";
const SUPABASE_SERVICE_ROLE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kZWxtenF1YXNwYWRyd3pkZnpzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTg2MTA5MSwiZXhwIjoyMDI3NDM3MDkxfQ.McP5Aq50Bh2vT-ScO-9fFVLBcNN5v3JRRo3a_esaHWw";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

app.get("/", async (req, res) => {
  const getPost = await db.from("mattismynamepost").select();
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
  const createPost = await db.from("mattismynamepost").insert({ title, desc });
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
