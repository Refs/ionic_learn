
# Ionic 3 Tutorial 

> https://www.youtube.com/watch?v=qGZ8ZSVU3qk&index=5&list=PLYxzS__5yYQng-XnJhB21Jc7NW1OIaqct

## the basic file structrue 

```js
// app.module.ts中

@NgModule({
//declarations: specifies a list of directive/pipes that belong to this module.
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
//  this is entry components is somethis which we have seen ;
// angular pretty much would not know when your page is kind of switched or if you perform any sort of other action like displaying a page as overly. so ionic would not implement this thing for the declarations that angular  would come to know about a component is changed or updated , so ionic what it does is that it tell angular to keep these components ready in use so that we can actually make use of this components anytime and an angular does not take some time to load that into the memory .
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

```