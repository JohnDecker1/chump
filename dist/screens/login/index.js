'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _store = require('../../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = _store.UserActions.login;


function LoginScreen(_ref) {
  var user = _ref.user;

  if (user) {
    requestAnimationFrame(function () {
      return _reactRouter.hashHistory.push('/');
    });
    return null;
  }

  var usernameInput = null;
  var passwordInput = null;

  var submit = function submit(e) {
    e.preventDefault();
    login(usernameInput.value, passwordInput.value, function () {
      _reactRouter.hashHistory.push('/');
    });
  };

  return _react2.default.createElement(
    'form',
    { onSubmit: submit },
    _react2.default.createElement(
      'fieldset',
      null,
      _react2.default.createElement(
        'legend',
        null,
        'Login:'
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          null,
          'Username: ',
          _react2.default.createElement('input', { required: true, type: 'text', ref: function ref(el) {
              return usernameInput = el;
            } })
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          null,
          'Password: ',
          _react2.default.createElement('input', { required: true, type: 'password', ref: function ref(el) {
              return passwordInput = el;
            } })
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/register' },
          'Register'
        ),
        _react2.default.createElement(
          'button',
          null,
          'Login'
        )
      )
    )
  );
}

exports.default = (0, _reactRedux.connect)(function (state) {
  return { user: state.user };
})(LoginScreen);