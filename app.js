const promiseLib = require('./promiseLib.js');

var promise = promiseLib.getNewPromise(1);
promise.then((value) => {
    console.log(value);
    return value + 1;
}).then((value) => {
    console.log(value);
    return value + 1;
})