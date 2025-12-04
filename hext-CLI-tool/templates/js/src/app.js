const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hii harsh here');
});

module.exports = app;