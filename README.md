# Alipush
开发中

*使用
1、安装
cordova plugin add https://...git --variable APP_KEY=key --variable App_Secret=secret



*注意事项
1、如果 UTDID.framework 无法找到时，在src/ios/OneSDK中找到 UTDID.framework，删除xcode中的framework里面的 UTDID.framework，然后手动拖入xcode中的framework里面，在弹出框勾选Copy items if needed。

2、xcode中的 AliPushConfig.plist，如果没有自动生成 appkey 和 Appsecret，请手动添加appkey，Appsecret
