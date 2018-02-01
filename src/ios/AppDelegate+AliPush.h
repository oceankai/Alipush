//
//  AppDelegate+AliPush.h
//  myApp
//
//  Created by sstek_mars on 2018/1/31.
//

#import "AppDelegate.h"
#import "CloudPushSDK/CloudPushSDK.h"
#import "AliPushPlugin.h"
#import <UserNotifications/UserNotifications.h>

@interface AppDelegate (AliPush) <UNUserNotificationCenterDelegate>

@property (nonatomic, strong) UNUserNotificationCenter *notificationCenter;

// 处理到来推送消息
- (void)onMessageReceived:(NSNotification *)notification;

@end
