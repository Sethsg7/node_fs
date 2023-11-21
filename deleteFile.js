const fs = require("fs");

fs.unlink("HelloWorld.txt", (err) => {
    if(err){
        console.error(err)
    }
    console.log("File successfully deleted.")
});