console.log("Starting app");

setTimeout(() => {
    console.log("Inside of calling");
}, 2000);

setTimeout(() => {
    console.log("Something to do");
}, 0)

console.log("Finishing app");