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
/*
    console.log("Stock Symbol: " + stockSymbol);

    

    var currentDate = new Date();
    var seconds = currentDate.getSeconds();

    var currentFlagValue = toggleFlag();
    if(currentFlagValue){
      return path.resolve('images/san-francisco-day.jpg')
    }
    else
    {
      return path.resolve('images/san-francisco-night.jpg');
    }
  */
    console.log("Stock Symbol: " + stockSymbol);

    var yahooFinanceAPIURL = "https://query1.finance.yahoo.com/v7/finance/quote?corsDomain=finance.yahoo.com&symbols="+stockSymbol;
    //var myCanvas = document.createElement("canvas");
    //myCanvas.width = 400;
    //myCanvas.height = 50;
  
    //var myCanvasContext = myCanvas.getContext('2d');
    //myCanvasContext.font = "20px Arial";
    
    ///
    ///
    //var Canvas = require('canvas')
    //, canvas = new Canvas(200,200)
    //, ctx = canvas.getContext('2d');


    //CANVAS
    
    const { createCanvas } = require('canvas')
    const canvas = createCanvas(200, 200)
    const ctx = canvas.getContext('2d')

    var fs = require('fs');
    ctx.font = '30px Impact';
    ctx.rotate(.1);
    ctx.fillText("Awesome!!!", 50, 100);
  
    var te = ctx.measureText('Awesome!');
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.lineTo(50, 102);
    ctx.lineTo(50 + te.width, 102);
    ctx.stroke();
    
    //console.log('<img src="' + canvas.toDataURL() + '" />');  
    
    var imageDirAndName = __dirname + '/../../images/awesome.png'
    console.log('Image Location: ' + imageDirAndName);

    //var out = fs.createWriteStream(imageDirAndName);
    //var stream = canvas.createPNGStream();

    //const fs = require('fs')
    //const stream = fs.createWriteStream('out.txt')
//stream.write('line one', () => {
 // stream.write('line two', () => {
   // stream.close()
  //}) 
//})
//async function createTheFile() {
//  return new Promise<void>(resolve => {
//      let a = replaceStream(makeRegex, replaceFn.bind(this, replaceObj), { maxMatchLen: 5000 });
//      let b = fs.createWriteStream(tempPath);
//      fs.createReadStream(oldPath, 'utf8').pipe(a).pipe(b);
//      b.on('finish', resolve);
//  }
//  }

// A function is created that accepts only one parameter 
// Resolve method is called on this promise 
// setTimeout is used to simulate a blocking Async operation 
function addIntAfter4Seconds(x) { 
  console.log('x:' + x);
  return new Promise(resolve => { 
    setTimeout(() => { 
      resolve(x + 4); 
    }, 2000); 
  }); 
} 
// Await expression will pause the async function 
// and wait for the promise to resolve before moving forward 
// addAsync is used to set up a promise chain 
async function addAsync(x) { 
  console.log('a');
  const a = await addIntAfter4Seconds(10); 
  console.log('b');
  const b = await addIntAfter4Seconds(20); 
  console.log('c');
  const c = await addIntAfter4Seconds(30); 
  return x + a + b + c; 
  
} 

var x = 0;
// then method to conclude the logic 
// the returned value is logged to the console 
addAsync(x).then((sum) => { 
  console.log(sum); 
  return path.resolve('images/san-francisco-night.jpg');
}); 


//var Promise = require('promise');
/*
  async function createTheFile() {
    return new Promise(resolve => {
  
      var out = fs.createWriteStream(imageDirAndName);
      var stream = canvas.createPNGStream();
      //request.pipe(out);
      stream.on('data', function(chunk){
        console.log('IN THE ON');
      out.write(chunk);

      })
      out.on('finish', resolve);
  })

  await createTheFile();
  }
  
  
  return path.resolve('images/san-francisco-night.jpg'); 
    */
    //stream.on('error', function (err) {
    //  fn(err);
    //});

    /*
    stream.on('end', function() {
      //var result = 'data:image/jpeg;base64,' + Buffer.concat(buffers).toString('base64');
      //fn(null, result);
      console.log('IN END');
      console.log('Path: ' + path.resolve('images/awesome.png'));
      //out.close();
      //return path.resolve('images/awesome.png');   
      //return path.resolve('images/san-francisco-night.jpg');   
    });
*/
    //.pipe(out);

    //var w = fs.createWriteStream('/tmp/imageresize/'+x);

    //request(options1).pipe(w);
    /*
    out.on('finish', function(){
      console.log('file downloaded to ', imageDirAndName);

      //console.log('Path: ' + path.resolve('images/awesome.png'));
      return path.resolve('images/awesome.png');
    });
*/
    //stream.off('data',function(finished){
    //  console.log('DONE');
    //})



    //return path.resolve(canvas.toDataURL());
    
    //CANVAS
    ///
    ///

    //return path.resolve('images/san-francisco-night.jpg');

   // var currentTime = GetCurrentDateTime();
    
   // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/*
    var xhr = new XMLHttpRequest();
    xhr.open("GET", yahooFinanceAPIURL, true);
    xhr.onload = function (e) 
    {
        if (xhr.readyState === 4) 
        {
          console.log ("readyState = 4");

          if (xhr.status === 200) 
          {
              console.log ("status = 200");
              
              //
              //
              //var jsResponse = JSON.parse(xhr.response);
              //console.log("yahooFinanceAPI Response: " + jsResponse["quoteResponse"]["result"][0]["regularMarketPrice"]);
              
              //var stockText = jsResponse["quoteResponse"]["result"][0]["regularMarketPrice"];
              //var finalStockText = selectedStockSymbol + " Market Price at " + currentTime + " is " + stockText;
              //myCanvasContext.fillText(finalStockText, 10, 50);
              
              //console.log("finalStockText:" + finalStockText);
              
              //var stockImg = new Image();
              //myCanvasContext.drawImage(stockImg, 400, 50);    
              //stockImg.src = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
              
              //
              //
              
              //return canvas.toDataURL();
              //return __dirname + '/state.png';
              //console.log('Path: ' + path.resolve('images/state.png'));
              //return path.resolve('images/state.png');
              console.log('Path: ' + path.resolve('images/state.png'));
              return path.resolve('images/state.png');
          } 
          else 
          {
            console.error(xhr.statusText);
          }
        }
    };
    xhr.onerror = function (e) 
    {
      console.error(" ***Error: " + xhr.statusText);
    };
    console.log('WE ARE HERE');
    xhr.send(null);
*/

    //return path.resolve('images/house.png');
    console.log('WE ARE HERE');
    return path.resolve('images/san-francisco-night.jpg'); 
  };

  
  function GetCurrentDateTime()
  {
      var today = new Date();

      //var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      var currentTime = time;
      
      return currentTime;
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