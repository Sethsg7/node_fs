const fs = require("fs");

fs.writeFile("HelloWorld.txt", "Hello, World!", (err) => {
    if (err){
        console.error(err) 
    } else {
        console.log("Succesfully wrote file.")
    }
});