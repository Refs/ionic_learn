# ionic_learn

## custom ionic splash

> video: https://www.youtube.com/watch?v=dPUmskG_-y0&t=2s&list=PL7Yek-3RGZNB9PXx1vKzUnqZOcUQFbRkO&index=5

> doc: https://angularfirebase.com/lessons/generate-a-custom-spash-screen-and-icons-in-ionic/#Generate-an-Ionic-Splash-Screen-and-App-Icon-with-the-CLI

> code: https://github.com/AngularFirebase/88-ionic-splash-animation


* using the sidemunu template

```bash
ionic start splash sidemenu
```

* generate an app icon and static splash page

* config the config.xml

```xml

<preference name="FadeSplashScreenDuration" value="300" />
<preference name="SplashScreenDelay" value="10000" />
<preference name="AutoHideSplashScreen" value="false" />
<preference name="FadeSplashScreen" value="true" />

<!-- set the showSplashScreen to false that will completely prevent the static image we created from being desplayed that might seem like what we want and it soes kind of work, but it does have one major problem it causes this white screen to appear briefly when the app is launched which might last for one second or two   -->
<!-- we think a better approach is to fade in from our static graphic in a way that looks seamless, we can do that by simply matching the background from the static image   -->
<!-- we want to close that static graphic as soon as possible  -->
<preference name="ShowSplashScreen" value="true" />

<!-- Remove Disable spinner on splash screen -->
 <preference name="ShowSplashScreenSpinner" value="false" />

```

*  策略总结

> The strategy is show splash when the app lanched . not allow splash auto hide until we close it manually when the app is ready. add the spalsh fading out effect, when we hide it. 

> after the splash hide. we a div block which is absolutely positioned upon app.html . we add the animation effect to the block. 

>  in the appComponent we set a timer to control the animation block hide 

* rxjs timer




