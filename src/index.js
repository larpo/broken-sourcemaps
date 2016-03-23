var foo = require("./foo");

var counter = 0;

setInterval(function() {
    document.querySelector("#count").textContent = foo.foo + " " + counter++;
}, 1000);