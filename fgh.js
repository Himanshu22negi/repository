async function myFn() {
    console.log("Before");
    let promise = fs.promises.readFile("f1.txt");
    console.log("Promise before", promise);
    console.log("After");
    // it stops the myfn function till promise is fullfilled
    // and return value of that promise
    let value = await promise;
    console.log(value + "");
}
myFn();