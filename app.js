const promiseLib = require('./promiseLib.js');

var promise = promiseLib.getNewPromise([1, 2]);
promise.then((value) => {
    console.log(value[0] + ' ' + value[1]);
    return [value[0] + 1, value[1] + 2];
}).then((value) => {
    console.log(value[0] + ' ' + value[1]);
    return [value[0] + 1, value[1] + 2];
})