
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/es6.d.ts" />
/// <reference path="../typings/core-js.d.ts" />

import {Router} from 'aurelia-router';

export class App {
    constructor() {
        this.message = "Hello World";
    }

    message: string;
}

console.log("THIS APP RAN!");
