const express = require('express');
const app = express();
const Dogs = require('./models/dogs');

// will need method override and body parser

require('./db/db')


// this is making sure that the server is looking to the dog controller for its output
const dogController = require('./controllers/dogs');


// any request coming into the app that starts with /dogs, will be forwarded to the dogs controller
app.use('/dogs', dogController);




app.listen(3000, () => {
    console.log("the server is listening and its here to listen to you and your problems")
});