exports.getEventImage = function() {

    console.log ("Enter getEventImage controller");

    var path = require('path');

    var currentDate = new Date();
    var seconds = currentDate.getSeconds();

    //if(isEven(seconds)){
    var currentFlagValue = toggleFlag();
    if(currentFlagValue){
      return path.resolve('images/san-francisco-day.jpg')
    }
    else
    {
      return path.resolve('images/san-francisco-night.jpg');
    }

    console.log ("Exit getEventImage controller");
  };

  exports.getStockQuote = function(stockSymbol) {
  
    var path = require('path');

    console.log('Before GetStockData');
    var curStockText = GetStockData(stockSymbol);
    console.log('curStockText: ' + curStockText);

    var imageLocationAndName = CreateImage(curStockText);

    console.log ('path: ' + path.resolve(imageLocationAndName));
   
    return path.resolve(imageLocationAndName); 
  
    console.log('AT THE END');
    
  };

  function GetStockData(selectedStockSymbol)
  {
    //var currentDate = new Date();
    //var seconds = currentDate.getSeconds();

    var currentDateTime = GetCurrentDateTime();

    console.log('Stock: ' + selectedStockSymbol);

    var request = require('sync-request');
    var res = request('GET', "https://query1.finance.yahoo.com/v7/finance/quote?corsDomain=finance.yahoo.com&symbols="+selectedStockSymbol);
    console.log(res.getBody());
    var jsResponse = JSON.parse(res.getBody());
    var stockValue = jsResponse["quoteResponse"]["result"][0]["regularMarketPrice"];
    console.log('Stock Text: ' + stockText);  

    var stockText = "As of " + currentDateTime + ", " + selectedStockSymbol +  " is $" + stockValue;
    return stockText;  
  }

  function CreateImage(currentStockText)
  {

    const { createCanvas } = require('canvas')
    const canvas = createCanvas(700, 100)
    const ctx = canvas.getContext('2d')

    var fs = require('fs');

    ctx.font = '30px Impact';
  
    ctx.fillText(currentStockText, 50, 50);
  
    var te = ctx.measureText('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz');
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.lineTo(50, 102);
    ctx.lineTo(50 + te.width, 102);
    ctx.stroke();
  
    const uuidv4 = require('uuid/v4')
    var myGUID = uuidv4();
    console.log('GUID: ' + myGUID);

    var imageDirAndName = __dirname + '/../../images/' + myGUID + '.png'
    console.log('Image Location: ' + imageDirAndName);
  
    var buf = canvas.toBuffer();
    fs.writeFileSync(imageDirAndName, buf);  
    return imageDirAndName;  
  }

  function GetCurrentDateTime()
  {
      var today = new Date();

      var datetime = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      var currentDateTime = datetime;
      
      return currentDateTime;
  }

 function toggleFlag(n) {
  if(flag)
  {
    flag=false;
  }else{
    flag=true
  }

  return flag;
}