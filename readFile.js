const fs = require("fs");

fs.readFile("HelloWorld.txt", (err, data) => {
    if (err) {
        console.error(err)
    }
    console.log(data.toString());
})