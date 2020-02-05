const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

OpenTimePersonalization = require('./api/controllers/openTimePersonalizationController.js');

global.flag = false;

app.get('/', (req, res) => {
  console.log("default route called");

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Open Time Personalization API</h1>');
});

app.get('/getEventImage',(req, res) => {
  console.log('Enter getEventImage route');
  res.sendFile(OpenTimePersonalization.getEventImage());
  console.log('Exit getEventImage route');
});

app.get('/StockQuote/:stockSymbol',(req, res) => {
  var symbol = req.params.stockSymbol;
  console.log(symbol);
  
  res.sendFile(OpenTimePersonalization.getStockQuote(symbol));

});

app.listen(PORT, () => console.log('Listening on ${ PORT }'));
