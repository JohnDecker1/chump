'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessage = exports.listen = undefined;

var _types = require('../types');

var types = _interopRequireWildcard(_types);

var _server = require('../server');

var server = _interopRequireWildcard(_server);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var listen = exports.listen = function listen() {
  return function (dispatch) {
    server.listen(function (msg) {
      dispatch({
        type: types.ADD_MESSAGE,
        payload: msg
      });
    });
  };
};

var sendMessage = exports.sendMessage = function sendMessage(data, type, cb) {
  return function () {
    server.sendMessage(data, type).then(cb);
  };
};