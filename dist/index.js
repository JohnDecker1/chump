'use strict';

require('./index.css');

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _modules = require('./lib/modules.js');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _index = require('./screens/index');

var _index2 = _interopRequireDefault(_index);

var _login = require('./screens/login');

var _login2 = _interopRequireDefault(_login);

var _home = require('./screens/home');

var _home2 = _interopRequireDefault(_home);

var _register = require('./screens/register');

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.hashHistory, _store2.default);
document.getElementById('root').innerHTML = '<h1>${creatediv()},</h1>';

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: history },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _index2.default },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'register', component: _register2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _login2.default })
    )
  )
), document.getElementById('root'));