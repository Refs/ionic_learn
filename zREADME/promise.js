function timeout(ms) {
    return new Promise(
        (resolve,reject) => {
            setTimeout(resolve,ms,'done')
        }
    )
}

let a = timeout(100);

a.then(
    (value) => {
        console.log(a);
        console.log(value);
    }
);