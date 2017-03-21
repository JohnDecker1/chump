'use strict';

var creatediv = function creatediv() {
  var intro = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Please enter your Username and password to access the chat';
  return '${intro}';
};