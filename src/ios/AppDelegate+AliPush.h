//
//  AppDelegate+AliPush.h
//  myApp
//
//  Created by sstek_mars on 2018/1/31.
//

#import "AppDelegate.h"
#import "CloudPushSDK/CloudPushSDK.h"

@interface AppDelegate (AliPush)

// SDK初始化
- (void)initCloudPush;
// 注册苹果推送，获取deviceToken用于推送
- (void)registerAPNS:(UIApplication *)application;
// 注册推送消息到来监听
- (void)registerMessageReceive;
// 处理到来推送消息
- (void)onMessageReceived:(NSNotification *)notification;

@end
