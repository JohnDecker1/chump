'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserActions = exports.MessageActions = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _message = require('./actions/message');

var messageActions = _interopRequireWildcard(_message);

var _user = require('./actions/user');

var userActions = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

var MessageActions = exports.MessageActions = (0, _redux.bindActionCreators)(messageActions, store.dispatch);
var UserActions = exports.UserActions = (0, _redux.bindActionCreators)(userActions, store.dispatch);

exports.default = store;