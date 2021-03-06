var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject("Arguments must be numbers");
            }
        }, 1500);
    });
};

asyncAdd(2, 3).then((result) => {
    console.log("Result : ", result);
    return asyncAdd(result, 20);
}).then((res) => {
    console.log("should be 25 ", res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

/*
// Create new instance of promise
var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey. It worked!');
        reject('Unable to fulfill promise')
    }, 2500);
});

somePromise.then((message) => {
    console.log('success : ', message);
}, (errorMessage) => {
    console.log('Error : ', errorMessage);
});
*/