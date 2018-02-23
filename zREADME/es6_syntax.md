# 阮一峰 es6

## promise 对象

“异步操作，就相当于我们找其他人去处理事情吗，假如我们说 现在让小王去处理事情，假如它，假如他做成了 我们就采取A 方案， 假如他做失败了 我们就采取B方案” -- ‘我门就采取就是一种承诺’ 是对  the eventual completion or failure of an aschronous operation.的承诺；


Promise对象有以下两个特点。

（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。


ES6规定， Promise对象是一个构造函数，用来生成Promise实例；Promise 构造函数接受一个函数作为参数， 该函数的两个参数分别是resolve 与 reject. 他们是两个函数，有javascript引擎提供，不用自己部署（即我们直接拿来用就可以了，不需要自己去定义resolve与reject）

```js
  
function timeout(ms) {
    return new Promise(
        (resolve,reject) => {
//  setTimeout()可以接受多个参数：
// var timeoutID = scope.setTimeout(function[, delay, param1, param2...]);
// param1, ..., paramN 附加参数，一旦定时器到期，它们会作为参数传递给function 或 执行字符串（setTimeout参数中的code）
// 即对于下面的定时器，当定时器到期时第三个参数'done' 会传递给resolve()方法；
// 调用resolve('done')将Promise的实例的[[PromiseStatus]]由pending 改为'resolved'; 同时将其[[PromiseValue]]的属性值由undefined改为resolve()方法接收的实参值'done'
            setTimeout(resolve,ms,'done')
        }
    )
}

let a = timeout(100);
// Promise {<pending>}
//     __proto__: Promise
//     [[PromiseStatus]]: "resolved"
//     [[PromiseValue]]: undefined

// Promise {<resolved>: "done"}
//     __proto__:Promise
//     [[PromiseStatus]]:"resolved"
//     [[PromiseValue]]:"done"


// 通过在构造函数Promise的参数函数中手动调用resolve与reject来改变Promise实例的状态,即改变promise的属性值[[PromiseStatus]]
// 调用resolve与reject函数时，通过向其传递参数来改变[[PromiseValue]]的值


a.then(
    (value) => {
        console.log(a);
        console.log(value);
    }
);


```