// var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'AliPushPlugin', 'coolMethod', [arg0]);
// };

// exports.initCloudPush = function (arg, success, error) {
//     exec(success, error, 'AliPushPlugin', 'initCloudPush', [arg]);
// };

// exports.registerAPNS = function (arg, success, error) {
//     exec(success, error, 'AliPushPlugin', 'registerAPNS', [arg]);
// };

// exports.registerMessageReceive = function (success, error) {
//     exec(success, error, 'AliPushPlugin', 'registerMessageReceive');
// };

// exports.onMessageReceived = function (arg, success, error) {
//     exec(success, error, 'AliPushPlugin', 'onMessageReceived', [arg]);
// };


var JPushPlugin = function () {}

JPushPlugin.prototype.init = function () {
  if (this.isPlatformIOS()) {
    this.callNative('initial', [], null)
  } else {
    this.callNative('init', [], null)
  }
}

JPushPlugin.prototype.callNative = function (name, args, successCallback, errorCallback) {
  if (errorCallback) {
    cordova.exec(successCallback, errorCallback, 'JPushPlugin', name, args)
  } else {
    cordova.exec(successCallback, this.errorCallback, 'JPushPlugin', name, args)
  }
}

module.exports = new JPushPlugin()