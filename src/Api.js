const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { firstName, lastName, username, email, phoneNumber, password } = req.body;
  // do something with the form data, such as storing it in a database
  console.log(`Received registration request for ${firstName} ${lastName} (${username}) with email ${email} and phone number ${phoneNumber}.`);
  res.send('Registration successful!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});