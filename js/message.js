exports.Message = function(to, from, subject, messageText){
  this.to = to;
  this.from = from;
  this.subject = subject;
  this.messageText = messageText;
}
exports.Message.prototype.read = function() {
  return "Dear " + this.to + ",&NewLine;Subject: " + this.subject + "&NewLine;" + this.messageText + "&NewLine;Yours truly, " + this.from;
}
