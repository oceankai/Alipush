# Alipush （使用与ionic2以后版本）
开发进度
2018-02-01 目前可以接收通知，但点击通知的回调暂未完成

*使用
1、安装
cordova plugin add https://...git --variable APP_KEY=key --variable APP_SECRET=secret

2、使用 
.ts中声明
declare let cordova: any;

cordova.plugins.AliPushPlugin.onMessageReceived(result => {
      alert('成功'+result);
    }, error => {
      alert('错误'+error);
});

*注意事项
1、如果 UTDID.framework 无法找到时，在src/ios/OneSDK中找到 UTDID.framework，删除xcode中的framework里面的 UTDID.framework，然后手动拖入xcode中的framework里面，在弹出框勾选Copy items if needed。

2、xcode中的 AliPushConfig.plist，如果没有自动生成 AppKey 和 AppSecret，请手动添加AppKey，AppSecret
