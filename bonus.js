const fs = require("fs");
const http = require("http");
const port = 3000;

http.createServer(function (req, res) {
    const { url } = req;
    res.setHeader("Content-Type", "text/html");

    if (url == "/") {
        res.statusCode = 200;
        res.write("<h1>Home</h1>");
    } else if (url == "/about") {
        res.statusCode = 200;
        res.write("<h1>About</h1>")
    } else {
        res.statusCode = 404;
        res.write("<h1>404 Page Not Found</h1>")
    }
    res.end();
}).listen(port);
