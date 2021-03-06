'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _store = require('../../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sendMessage = _store.MessageActions.sendMessage,
    listen = _store.MessageActions.listen;
var getUser = _store.UserActions.getUser;

var HomeScreen = function (_Component) {
  _inherits(HomeScreen, _Component);

  function HomeScreen() {
    _classCallCheck(this, HomeScreen);

    return _possibleConstructorReturn(this, (HomeScreen.__proto__ || Object.getPrototypeOf(HomeScreen)).apply(this, arguments));
  }

  _createClass(HomeScreen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var user = this.props.user;

      if (user) listen();else getUser();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          messages = _props.messages;

      if (!user) {
        requestAnimationFrame(function () {
          return _reactRouter.hashHistory.push('/login');
        });
        return null;
      }

      var textInput = null;

      var submit = function submit(e) {
        e.preventDefault();
        sendMessage({ value: textInput.value });
        textInput.value = '';
      };

      return _react2.default.createElement(
        'form',
        { onSubmit: submit },
        messages.map(function (msg) {
          if (msg.type === 'text') return _react2.default.createElement(
            'div',
            { key: msg.id },
            msg.data.value
          );
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', { required: true, type: 'text', ref: function ref(el) {
              return textInput = el;
            } }),
          _react2.default.createElement(
            'button',
            null,
            'Send'
          )
        )
      );
    }
  }]);

  return HomeScreen;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    user: state.user,
    messages: state.messages
  };
})(HomeScreen);