var Message = require('./../js/message.js').Message;

$(document).ready(function(){
  $('#email').submit(function(event){
    event.preventDefault();
    var inputTo = $('#to').val();
    var inputFrom = $('#from').val();
    var inputSubject = $('#subject').val();
    var inputMessage = $('#message').val();

    var newMessage = new Message(inputTo, inputFrom, inputSubject, inputMessage);
    $("#output").append("<textarea rows='10'class='form-control'>" + newMessage.read() + "</textarea>")
  });
});
