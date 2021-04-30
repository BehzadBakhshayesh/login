"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLogin = isLogin;
exports.token = token;
exports.loading = loading;
exports.LoginRequest = LoginRequest;

var _Request = _interopRequireDefault(require("../../Tools/Request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isLogin(data) {
  return {
    type: 'IS_LOGIN',
    payload: data
  };
}

function token(data) {
  return {
    type: 'TOKEN',
    payload: data
  };
}

function loading(data) {
  return {
    type: 'LOADING',
    payload: data
  };
}

function LoginRequest(formData) {
  return function (dispatch) {
    dispatch(loading(true));
    (0, _Request["default"])({
      method: 'post',
      url: '/auth/login',
      data: _objectSpread({}, formData)
    }).then(function (response) {
      if (response.status == 200 || response.status == 201) {
        dispatch(isLogin(true));
        dispatch(token(localStorage.setItem('access', response.data.data.access)));
        localStorage.setItem('access', response.data.data.access);
      }
    })["catch"](function (err) {
      console.log(err.response);
    })["finally"](function () {
      return dispatch(loading(false));
    });
  };
}