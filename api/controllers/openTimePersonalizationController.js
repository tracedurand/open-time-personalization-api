exports.getEventImage = function(req, res) {

    var path = require('path');

    var currentDate = new Date();
    var seconds = currentDate.getSeconds();

    //if(isEven(seconds)){
    var currentFlagValue = toggleFlag();
    if(currentFlagValue){
      res.sendFile(path.resolve('images/san-francisco-day.jpg'));
    }
    else
    {
      res.sendFile(path.resolve('images/san-francisco-night.jpg'));
    }
  };

  //function isEven(n) {
  //  var integer = parseInt(n);
  //
  //  return integer % 2 == 0;
 //}

 function toggleFlag(n) {
  if(flag)
  {
    flag=false;
  }else{
    flag=true
  }

  return flag;
}