const fs = require("fs");

fs.writeFileSync("HelloWorld.txt", "Hello, World!", (err) => {
    if (err){
        console.error(err) 
    } else {
        console.log("Succesfully wrote file.")
    }
});