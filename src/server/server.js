const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 9000;

app.get('/*', express.static(path.join(__dirname, '../..', 'build/index.html')));


app.post('/helloworld', bodyParser.json(), async (req, res) => {
  console.log(req.body);
  res.status(200);
  res.json('hello my dude')
});


app.listen(PORT);
