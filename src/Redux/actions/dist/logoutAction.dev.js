"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutRequest = LogoutRequest;

var _Request = _interopRequireDefault(require("../../Tools/Request"));

var _loginAction = require("./loginAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function LogoutRequest() {
  return function (dispatch) {
    (0, _Request["default"])({
      method: 'get',
      url: '/auth/logout'
    }).then(function (response) {
      if (response.data.status) {
        dispatch((0, _loginAction.isLogin)(false));
        localStorage.removeItem('access');
        localStorage.clear();
      }
    })["catch"](function (err) {
      return alert(err);
    });
  };
}