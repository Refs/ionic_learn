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

### 重要书签

solaredge：https://monitoring.solaredge.com/solaredge-web/p/site/137174/#/layout

## 对promise的理解

“异步操作，就相当于我们找其他人去处理事情吗，假如我们说 现在让小王去处理事情，假如它，假如他做成了 我们就采取A 方案， 假如他做失败了 我们就采取B方案” -- ‘我门就采取就是一种承诺’ 是对  the eventual completion or failure of an aschronous operation.的承诺；


Promise对象有以下两个特点。

（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

ES6规定， Promise对象是一个构造函数，用来生成Promise实例；Promise 构造函数接受一个函数作为参数， 该函数的两个参数分别是resolve 与 reject. 他们是两个函数，有javascript引擎提供，不用自己部署（即我们直接拿来用就可以了，不需要自己去定义resolve与reject）

```js
function timeout(ms) {
    return new Promise(
        (resolve, ms, 'done') => {
            set
        }
    )
}

```