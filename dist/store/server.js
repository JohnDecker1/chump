'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessage = exports.listen = exports.register = exports.login = exports.getUser = undefined;

var getUser = exports.getUser = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return server.get('/users');

          case 2:
            res = _context.sent;
            return _context.abrupt('return', res.data);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUser() {
    return _ref.apply(this, arguments);
  };
}();

var login = exports.login = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(username, password) {
    var res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return server.post('/users/login', {
              username: username,
              password: password
            });

          case 2:
            res = _context2.sent;
            return _context2.abrupt('return', res.data);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function login(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

var register = exports.register = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(username, password, email) {
    var res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return server.post('/users/create', {
              username: username,
              password: password,
              email: email
            });

          case 2:
            res = _context3.sent;
            return _context3.abrupt('return', res.data);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function register(_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

var listen = exports.listen = function () {
  var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(fn) {
    var sse;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            sse = new EventSource(constants.CHAMP_URL + '/msgs');

            sse.addEventListener('create', function (e) {
              fn(JSON.parse(e.data));
            });

          case 2:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function listen(_x6) {
    return _ref4.apply(this, arguments);
  };
}();

var sendMessage = exports.sendMessage = function () {
  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(data) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
    var res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            res = server.post('/msgs', {
              type: type,
              data: data
            });
            return _context5.abrupt('return', res.data);

          case 2:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function sendMessage(_x7) {
    return _ref5.apply(this, arguments);
  };
}();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _constants = require('./constants');

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var server = _axios2.default.create({
  baseURL: '' + constants.CHAMP_URL,
  withCredentials: true
});