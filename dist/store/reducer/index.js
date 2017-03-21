'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterRedux = require('react-router-redux');

var _redux = require('redux');

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  user: _user2.default,
  messages: _message2.default
});