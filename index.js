const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the aws API cicd');
});

app.get('/health', (req, res) => {
  res.send('OK');
});


// Define your API endpoints here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});