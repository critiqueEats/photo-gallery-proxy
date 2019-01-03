const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const template = require('./template/template')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/restaurant/:restaurantId', (req, res) => {
  res.status(200);
  res.send(template(req.params.restaurantId));
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});