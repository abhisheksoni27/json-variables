#!/usr/env/bin node

const fs = require('fs');

module.exports = function makePackageJson(variables) {
    find.file(/\.js$/, __dirname, function (files) {
        console.log(files.length);
    })
};