const express = require('express')
const app = express()
require('./config.js');
var bodyParser = require('body-parser')
global.router = express.Router();
require('./controller');
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})