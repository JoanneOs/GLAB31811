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

// File: index.js

// STEP 1: Initialize project (already done via npm init -y)
// This created package.json

// STEP 2: Added scripts to package.json
/*
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
*/

// STEP 3: Installed nodemon (already done via npm i --save-dev nodemon)
// This created package-lock.json and added nodemon to devDependencies

// STEP 4: Creating a Server
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// Create server with multiple routes
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  
  // Home route
  if (req.url === '/') {
    res.statusCode = 200;
    res.end(`
      <h1 style="color: red">Hello World!</h1>
      <p>I wonder what else we can send...</p>
      <p>Try these routes:</p>
      <ul>
        <li><a href="/quote">/quote</a> - Random trucking quote</li>
        <li><a href="/plain">/plain</a> - Plain text version</li>
      </ul>
    `);
  }
  
  // Plain text version
  else if (req.url === '/plain') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('my first nodejs');
  }
  
  // Random Trucking Quote Generator
  else if (req.url === '/quote') {
    res.statusCode = 200;
    const quotes = [
      "Life is a journey, enjoy the ride.",
      "The road to success is always under construction.",
      "Truck drivers are the backbone of the economy.",
      "Keep truckin' like the Doo-Dah Man!",
      "No one ever said trucking was easy, but it's worth it."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.end(`
      <h1>Trucking Quote of the Day</h1>
      <blockquote style="font-size: 24px; color: blue;">"${randomQuote}"</blockquote>
      <a href="/">Back to Home</a>
    `);
  }
  
  // 404 Not Found
  else {
    res.statusCode = 404;
    res.end(`
      <h1>404 Not Found</h1>
      <p>The page you requested doesn't exist.</p>
      <a href="/">Back to Home</a>
    `);
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// To run:
// npm start       - runs with Node (node index.js)
// npm run dev     - runs with nodemon (auto-restarts on changes)