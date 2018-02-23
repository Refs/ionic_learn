## android studio 

### Android Studio 第一次新建Android Gradle项目超级慢的解决方案

http://www.cnblogs.com/leo-lsw/p/gradle-first-created-error.html?utm_source=tuicool


## ADS默认安装过程中的一些路径 主要用于配置环境变量

SDK路径              C:\Users\Administrator\AppData\Local\Android\sdk

软件安装路径       C:\Program Files\Android\Android Studio

默认工程目录       C:\Users\Administrator\AndroidstudioProjects

Gradle插件目录     C:\Users\Administrator\.gradle\wrapper\dists\gradle-1.9-all\3jdgemv0iv8uqohg3kcp2o88r1 目录下

## 与adb相关的问题，比如掉线问题、Android Studio 提示Session 'app':Error Installing APK、找不到设备

http://blog.csdn.net/hansion3333/article/details/51749854

接下来就是解决adb掉线问题的方法了：

1.重启adb

在命令行输入 adb kill-server

然后输入  adb devices

2.重启adb.exe

任务管理器关闭adb.exe进程

然后在命令行输入  adb devices

3.查看是否5037端口被占用

命令行输入 netstat -aon|findstr 5037    查看使用5037端口的进程

假设看到3213正在使用5037端口    

   
输入 tasklist | findstr "3213"  查看这个进程是哪个程序创建的，如果不是adb，通过以下命令杀死它

 taskkill /f /pid 3212

最后重新插拔数据线，输入adb devices试试



# cordova

## How to integrate Cordova Plugins into existing Ionic project?

https://stackoverflow.com/questions/23673186/ionic-cordova-how-to-integrate-cordova-plugins-into-existing-ionic-project


```ts
// ionic native wraps plugin callbacks in a Promise or an Observable, providing a common interface for all plugins and ensuring that native events trigger 

```

