#import <Cordova/CDV.h>

@interface AliPushPlugin : CDVPlugin {
  // Member variables go here.
}

// - (void)coolMethod:(CDVInvokedUrlCommand*)command;

// 处理到来推送消息
- (void)onMessageReceived:(CDVInvokedUrlCommand*)command;

@end
