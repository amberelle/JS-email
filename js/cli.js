var Message = require('./js/message.js').Message;
var prompt = require('prompt');
prompt.start();



prompt.get('goal', function(err, result){
  var output = pingPong(result.goal);
  output.forEach(function(element){
    console.log(element);
  });
});
