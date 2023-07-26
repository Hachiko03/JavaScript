function sayHelloName (printName) {
    console.log("Hello ")
    printName();
};
function printName () {
    console.log("Raul Martinez");
};

sayHelloName(printName);