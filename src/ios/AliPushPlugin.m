/********* AliPushPlugin.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>
#import "AliPushPlugin.h"

@implementation AliPushPlugin

- (void)coolMethod:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* echo = [command.arguments objectAtIndex:0];

    if (echo != nil && [echo length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}


// 初始化
- (void)initCloudPush:(CDVInvokedUrlCommand*)command
{

}

// 注册苹果推送，获取deviceToken用于推送
- (void)registerAPNS:(CDVInvokedUrlCommand*)command
{

}

// 注册推送消息到来监听
- (void)registerMessageReceive
{

}

// 处理到来推送消息
- (void)onMessageReceived:(CDVInvokedUrlCommand*)command
{

}

@end
