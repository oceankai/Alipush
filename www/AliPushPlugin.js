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


var AliPushPlugin = function () {}

AliPushPlugin.prototype.coolMethod = function (arg0, success, error) {
    cordova.exec(success, error, 'AliPushPlugin', 'coolMethod', [arg0]);
};

AliPushPlugin.prototype.onMessageReceived = function (arg0, success, error) {
    cordova.exec(success, error, 'AliPushPlugin', 'onMessageReceived', [arg0]);
}

module.exports = new AliPushPlugin()