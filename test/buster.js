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
        "src/datatypes.js",
        "src/util.js",
        "src/head.js",
        "src/geometry.js",
        "src/feature.js",
        "src/dumpers.js",
        "src/parser.js"
    ],
    tests: [
        "test/*-test.js"
    ],
    resources: [
        {path: "/testfile1.sos", content: fs.readFileSync('data/testfile1.sos')},
        {path: "/punkttest.sos", content: fs.readFileSync('data/punkttest.sos')},
        {path: "/kurvetest.sos", content: fs.readFileSync('data/kurvetest.sos')},
        {path: "/flatetest.sos", content: fs.readFileSync('data/flatetest.sos')},
        {path: "/flate_oy.sos", content: fs.readFileSync('data/flate_oy.sos')},
        {path: "/naturvernomraade.sos", content: fs.readFileSync('data/naturvernomraade.sos')},
        {path: "/non-linear.sos", content: fs.readFileSync('data/non-linear.sos')},
        {path: "/testfile2.sos", content: fs.readFileSync('data/testfile2.sos')},
        {path: "/buer.sos", content: fs.readFileSync('data/buer.sos')},
        {path: "/fastmerke.sos", content: fs.readFileSync('data/fastmerke.sos')},
        {path: "/testfile_issue4.sos", content: fs.readFileSync('data/testfile_issue4.sos')}
    ]

};

