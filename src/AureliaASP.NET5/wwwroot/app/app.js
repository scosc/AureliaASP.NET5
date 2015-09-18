/// <reference path="typings/tsd.d.ts" />
/// <reference path="typings/es6.d.ts" />
/// <reference path="typings/core-js.d.ts" />
var App = (function () {
    function App() {
        this.message = "Hello World";
    }
    return App;
})();
exports.App = App;
console.log("THIS APP RAN!");
