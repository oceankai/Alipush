#import <Cordova/CDV.h>

@interface AliPushPlugin : CDVPlugin {
  // Member variables go here.
}

- (void)coolMethod:(CDVInvokedUrlCommand*)command;

// 初始化
- (void)initCloudPush:(CDVInvokedUrlCommand*)command;

// 注册苹果推送，获取deviceToken用于推送
- (void)registerAPNS:(CDVInvokedUrlCommand*)command;

// 注册推送消息到来监听
- (void)registerMessageReceive;

// 处理到来推送消息
- (void)onMessageReceived:(CDVInvokedUrlCommand*)command;

@end