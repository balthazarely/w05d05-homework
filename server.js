const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const Dogs = require('./models/dogs');

// will need method override and body parser

require('./db/db')

//lets css work
app.use(express.static(__dirname + '/public'));


// this is making sure that the server is looking to the dog controller for its output
const dogController = require('./controllers/dogs');


// any request coming into the app that starts with /dogs, will be forwarded to the dogs controller
app.use('/dogs', dogController);
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));



app.listen(3000, () => {
    console.log("the server is listening and its here to listen to you and your problems")
});