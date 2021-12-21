let path = require('path');
let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, '..', '/client/dist/');
app.use(express.static(staticPath));
app.use(express.json());

app.listen(port);

app.get('/', (req, res) => {
  res.send('/index.html');
})