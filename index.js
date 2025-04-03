//test
//nodejs already installed
//stp 3 npm init----that was manually-- doing npm init -y //is better
//now we have package.json

//in package.json we added comma , then "start": "node index.js"  within the "scripts"

//npm start
// Add "start": "node index.js" under the "scripts" section in package.json. 
// This lets me use npm start instead of typing node index.js every time.
//  It's a shortcut and a standard command, making it easier to run the project and work with other tools or teams.

//npm i --save-dev nodemon   //created package-lock.json

// Within package.json, you will also notice a new
// “devDependencies” section that includes nodemon and the version number.
// Using nodemon to run your program is simple:
// nodemon index.js

// Now, any time you make changes to index.js,
//  nodemon will automatically restart your project to reflect those changes. 
// Just save your file, and it'll reload!
// console.log("this is my first nodejs");
// console.log(5+6);



// Part 4: Creating a Server
//Node’s purpose is to allow developers to c
// reate back-end systems to pair with their application’s front-end.


// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
//     });

    // server.listen(port, hostname, () => {
    //     console.log(`Server running at http://${hostname}:${port}/`);
    //     });

        // const server = http.createServer((req, res) => {
        //     res.statusCode = 200;
        //     res.setHeader('Content-Type', 'text/html');
        //     res.write('<h1 style="color: red">Hello World!</h1>');
        //     res.write('<p>I wonder what else we can send...</p>');
        //     res.end();
        //     });

        //     server.listen(port, hostname, () => {
        //         console.log(`Server running at http://${hostname}:${port}/`);
        //         });


        
        //step 5//
///////////////////////
/////quote generator/////
///////////////////////

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;