var foo = require("./foo");

var counter = 0;

console.log("starting the counter")

setInterval(function() {
    document.querySelector("#count").textContent = foo.foo + " " + counter++;
}, 1000);