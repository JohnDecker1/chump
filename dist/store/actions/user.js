'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchUser = exports.register = exports.login = exports.getUser = undefined;

var _types = require('../types');

var types = _interopRequireWildcard(_types);

var _server = require('../server');

var server = _interopRequireWildcard(_server);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getUser = exports.getUser = function getUser() {
  return function (dispatch) {
    server.getUser().then(function (user) {
      return dispatch(patchUser(user));
    });
  };
};

var login = exports.login = function login(username, password) {
  return function (dispatch) {
    server.login(username, password).then(function (user) {
      return dispatch(patchUser(user));
    });
  };
};

var register = exports.register = function register(username, password, email) {
  return function (dispatch) {
    server.register(username, password, email).then(function (user) {
      return dispatch(patchUser(user));
    });
  };
};

var patchUser = exports.patchUser = function patchUser(data) {
  return {
    type: types.PATCH_USER,
    payload: data
  };
};