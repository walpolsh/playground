// yarn dev to run
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const app = express();

const port = process.env.PORT || 5000;

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send({express: `Connection Established`});
});

app.get('/users', (req, res) => {
  const user = {firstName: 'Paul', lastName: 'Walsh'}
  res.json(user)
});

app.listen(port, () => console.log(`Listening on port ${port}`));
