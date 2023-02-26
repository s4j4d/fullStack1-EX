stat = 0;

function P([...promises]){
    for (let i = 0; i < promises.length; i ++){
        promises[i].then(() => stat += 1)
                    .catch(console.log("Error"));
    }
    console.log(stat);
}

promise1 = new Promise((resolve, reject) => {
    resolve(5);
})
promise2 = new Promise((resolve, reject) => {
    resolve(5);
})
promise3 = new Promise((resolve, reject) => {
    resolve(5);
})

_P = [promise1, promise2, promise3];
P(_P);

promiseall = new Promise((resolve, reject) => {
    if (stat) resolve("OK");
    else reject("Not Ok")
})

promiseall.then(val => console.log(val))