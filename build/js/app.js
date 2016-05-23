(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Message = function(to, from, subject, messageText){
  this.to = to;
  this.from = from;
  this.subject = subject;
  this.messageText = messageText;
}
exports.Message.prototype.read = function() {
  return "Dear " + this.to + ",&NewLine;Subject: " + this.subject + "&NewLine;" + this.messageText + "&NewLine;Yours truly, " + this.from;
}

},{}],2:[function(require,module,exports){
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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

},{"./../js/message.js":1}]},{},[2]);
