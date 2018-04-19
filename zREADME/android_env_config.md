# android development environment config

## android emulator genymotion

* download personal free verision： https://www.genymotion.com/fun-zone/

* android studio extension: genymotion

## java evironment 

* download jdk1.7 and jre7 from baidu disk

* config global environment

> https://jingyan.baidu.com/article/6dad5075d1dc40a123e36ea3.html


## android sdk manager

> https://github.com/inferjay/AndroidDevTools

* download sdk manager

> https://dl.google.com/android/android-sdk_r24.4.1-windows.zip?utm_source=androiddevtools&utm_medium=website


* config sdk manager

    + 郑州大学开源镜像站: `mirrors.zzu.edu.cn`  端口： `80`

    + 启动 Android SDK Manager ，打开主界面，依次选择『Tools』、『Options...』，弹出『Android SDK Manager - Settings』窗口；

    + 在『Android SDK Manager - Settings』窗口中，在『HTTP Proxy Server』和『HTTP Proxy Port』输入框内填入上面镜像服务器地址(不包含http://，如下图)和端口，并且选中『Force https://... sources to be fetched using http://...』复选框。设置完成后单击『Close』按钮关闭『Android SDK Manager - Settings』窗口返回到主界面；

    + 依次选择『Packages』、『Reload』。

    + 身体是枷锁，红尘是牢笼；

![](./images/sdk-manager-proxy-settings.png)

* necessary downloading 

![](./images/android_studio_manager_analysis.jpg)

## android API

* download API with sdk manager

* select appropriate API version

> https://pointdeveloper.com/build-ionic-2-cordova-apps-specific-platform-version/

* config global environment

    + variable： ANDROID_HOME
    + path: %ANDROID_HOME%\platform-tools
    + path: %ANDROID_HOME%\tools


## android studio



## select appropriate ionic android version

### for  android 

> 文档解释 ： https://developer.android.com/guide/topics/manifest/uses-sdk-element.html

> cordova 的很多配置，除了在官网文档上面找之外，还应去android 的文档里面找，配置的目的都是相同的，先后后者解释的更为详细一点；

*  if you run the build command, your app will be built for the default target for the CLI version of Cordova. For each version of the Cordova CLI the default build target is different. As a result, it becomes necessary to know how you can target the platform version of your choice.

```xml
<!-- config.xml 中 -->

<preference name="android-minSdkVersion" value="19"/>

<!-- This will build an app that will be supported by an Android device which has to have Android API-19 KitKat (4.4) installed at the least. This means that devices running latter version of the Android will also be able to run the app. It is a good practice to have a minSdkVersion set. -->

	
<preference name="android-maxSdkVersion" value="16"/>

<preference name="android-targetSdkVersion" value="16"/>

```

### for ios

```xml

<preference name="deployment-target" value="7.0" />

```


### full config file

```xml
<?xml version='1.0' encoding='utf-8'?>
<widget id="io.cordova.hellocordova" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>HelloCordova</name>
    <description>
        A sample Apache Cordova application that responds to the deviceready event.
    </description>
    <author email="dev@cordova.apache.org" href="http://cordova.io">
        Apache Cordova Team
    </author>
    <content src="index.html" />
    <plugin name="cordova-plugin-whitelist" spec="1" />
    <access origin="*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <allow-intent href="tel:*" />
    <allow-intent href="sms:*" />
    <allow-intent href="mailto:*" />
    <allow-intent href="geo:*" />
 
  <preference name="android-minSdkVersion" value="16"/>
  <preference name="android-targetSdkVersion" value="16"/>
  <preference name="android-maxSdkVersion" value="16"/>
 
  <preference name="deployment-target" value="7.0" />
 
    <platform name="android">
        <allow-intent href="market:*" />
    </platform>
    <platform name="ios">
        <allow-intent href="itms:*" />
        <allow-intent href="itms-apps:*" />
    </platform>
</widget>

```