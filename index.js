const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  console.log("default route called");

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Open Time Personalization API</h1>');
});

var routes = require('./api/routes/openTimePersonalizationRoutes'); 
routes(app);

app.listen(PORT, () => console.log('Listening on ${ PORT }'));
