function sayHelloName(printName) {
    setTimeout(function () {
        console.log("Hello ")
        printName();
    }, 1000)
};
function printName() {
    console.log("Name");
};

sayHelloName(printName);