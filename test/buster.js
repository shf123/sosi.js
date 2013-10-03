var config = module.exports;
var fs = require("fs");

config["My tests"] = {
    env: "browser",        // or "node"
    rootPath: "../",
    libs: [
        "lib/*.js"
    ],
    sources: [
        "src/class_system.js",
        "src/*.js"
    ],
    tests: [
        "test/*-test.js"
    ],
    resources: [
        {path: "/testfile1.sos", content: fs.readFileSync('data/testfile1.sos')}
    ]

};
