const fs = require("fs");

fs.appendFile("HelloWorld.txt", " Here's more text.", (err) => {
    if(err) {
        console.error(err)
    }
    console.log("File successfully updated.")
})