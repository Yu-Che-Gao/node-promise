#the implementation of Promise in nodeJS

##The basic format

<pre>
    const promise = new Promise(function(resolve, reject) {
        // success
        resolve(value)
        // fail
        reject(reason)
    });

    promise.then(function(value) {
        // on fulfillment
    }, function(reason) {
        // on rejection
    })
</pre>

##PromiseLib function

###Generate new object of Promise

<pre>
    var promise = promiseLib.getNewPromise(value);
</pre>