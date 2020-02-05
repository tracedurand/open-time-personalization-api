const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

var path = require('path');

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
  //var fileLocationAndFileName = path.join('/emailarchives',file);
  //console.log('Enter emailarchives route');
 //console.log('__dirname:' , __dirname);
  //console.log('filelocation:', fileLocationAndFileName);

  //If there is a querystring parameter of d=1, attempt to download the file.
 // if (req.query["d"] == 1)
  //{
 //   res.download(__dirname + fileLocationAndFileName, file); 
 // }
 // else
  //Otherwise, simply render it to the screen.
 // {
 //   res.sendFile(path.join(__dirname + fileLocationAndFileName)); 
  //}
  //res.sendFile(OpenTimePersonalization.getStockQuote(symbol));

  const { createCanvas } = require('canvas')
  const canvas = createCanvas(600, 200)
  const ctx = canvas.getContext('2d')

  var fs = require('fs');
  ctx.font = '30px Impact';
  
  ctx.rotate(.1);

  var currentDate = new Date();
  var seconds = currentDate.getSeconds();

  ctx.fillText("Awesome " + seconds, 50, 100);

  var te = ctx.measureText('Awesome xx');
  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.beginPath();
  ctx.lineTo(50, 102);
  ctx.lineTo(50 + te.width, 102);
  ctx.stroke();
  
  //console.log('<img src="' + canvas.toDataURL() + '" />');  
  
  var imageDirAndName = __dirname + '/images/awesome.png'
  console.log('Image Location: ' + imageDirAndName);
  //fs.writeFileSync(imageDirAndName, canvas.toDataURL().replace('data:image/png;base64,', ""), 'base64');

  var buf = canvas.toBuffer();
fs.writeFileSync(__dirname + "/images/awesome.png", buf);


//fs.writeFileSync(__dirname + '/images/awesome.png'), stream = canvas.createPNGStream();
  //var out = fs.createWriteStream(__dirname + '/images/awesome.png'), stream = canvas.createPNGStream();
  console.log ('before sendFile');
  console.log ('path: ' + path.resolve(imageDirAndName));
  res.sendFile(path.resolve(imageDirAndName)); 
  //res.sendFile(path.resolve('images/san-francisco-night.jpg')); 
  //res.sendFile(path.resolve('images/house.png')); 
  //res.sendFile(path.resolve('images/test2.png')); 
  console.log ('after sendFile');
//stream.on('data', function(chunk){
 // console.log('IN THE ON data');
  //out.write(chunk);
//});

    
  //  stream.on('end', function() {
  //    console.log('IN END');
  //    console.log('Path: ' + path.resolve('images/awesome.png'));
  //  });


   // out.on('finish', function(){
   //   console.log('file downloaded to ', imageDirAndName);

      //console.log('Path: ' + path.resolve('images/awesome.png'));
  //    return path.resolve('images/awesome.png');
  //  });

    //stream.off('data',function(finished){
    //  console.log('DONE');
    //})

  //var myImage = OpenTimePersonalization.getStockQuote(symbol);

  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/html');
  //res.end('<h1>My Image</h1><img src="' + myImage + '" />');
  console.log('AT THE END');
});

app.listen(PORT, () => console.log('Listening on ${ PORT }'));
