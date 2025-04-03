I started by setting up a basic Node.js server. 
First I ran npm init -y to create the package.json file, 
then installed nodemon as a dev dependency using npm i --save-dev nodemon. 
I added two scripts to package.json - "start" for production (node index.js) and "dev" for development (nodemon index.js). 

The server listens on port 3000 and has three main routes: 
the home page ('/') shows available routes, 
'/plain' returns simple text,
 and '/quote' generates random trucking quotes.
 Any other routes get a 404 response. 
 
 To run it, I use npm start for production or npm run dev during development when I want automatic restarts after code changes. 
 The server responds with either HTML pages (with basic styling) or plain text depending on the route.
 
 I can test it by going to http://localhost:3000 in my browser after starting the server.

 will keep adding and changing to learn more. 