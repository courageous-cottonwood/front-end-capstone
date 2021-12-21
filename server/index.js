let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.listen(port);

app.get('/', (req, res) => {
  res.send('Hello World');
})