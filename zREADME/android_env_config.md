# android development environment config

## android emulator genymotion

* download personal free verision： https://www.genymotion.com/fun-zone/

* android studio extension: genymotion

## java evironment 

> new cordova need jdk 1.8 or above

* download jdk1.7 and jre7 from baidu disk

* config global environment

> https://jingyan.baidu.com/article/6dad5075d1dc40a123e36ea3.html


## android sdk manager

> https://github.com/inferjay/AndroidDevTools

* download sdk manager

> https://dl.google.com/android/android-sdk_r24.4.1-windows.zip?utm_source=androiddevtools&utm_medium=website

* install sdk manager 

> UnZip the file in any folder, 但要特别的注意解压的文件夹，的路径中，不能包含有空格（如 ： C:\Program Files\ 路径中就包含有一个空格路径，直接导致，后面的安装 功亏一篑）

> Error: Your project location contains whitespace. This can cause problem on some plateform and is not recommended




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

> API 15

* config global environment

    + variable： ANDROID_HOME
    + path: %ANDROID_HOME%\platform-tools
    + path: %ANDROID_HOME%\tools

## android gradle


## android studio

### config the android sdk manually

* skip the SDK components setup panel

![](./images/skip_components_setup_panel.png)

* config the SDK path 
    + File -- other settings - default project structure  打开 config panel
    + 在 Android SDK location 中 打开资源管理器  选择 sdk 目录
    + 目标目录是 (SDK Manager.exe 执行文件所在的路径)

* sdk的路径设置完成之后，可以直接进入到了setting的设置界面中，然后在进行选中Android sdk的，查看sdk的路径是否正确。

![](./images/sdk_path_confirm.png)


* android studio default path

```bash
SDK路径              C:\Users\Administrator\AppData\Local\Android\sdk

软件安装路径       C:\Program Files\Android\Android Studio

默认工程目录       C:\Users\Administrator\AndroidstudioProjects

Gradle插件目录     C:\Users\Administrator\.gradle\wrapper\dists\gradle-1.9-all\3jdgemv0iv8uqohg3kcp2o88r1 目录下
```


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

## spec target cordova platform version

You should be able to see all the versions of platforms installed in your project with:

```bash
cordova platform list
```
Then you can remove the current version with:

```bash
cordova platform remove android
```

And install the version you want/need with: (in my case 6.1.1)

```bash
cordova platform add android@6.1.1
```

Source: cordova.apache.org documentation