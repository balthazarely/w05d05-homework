const express = require("express");
const router = express.Router();
const Dogs = require('../models/dogs');


// since we are already in the controller, we dont need to say "/dogs" in any of the routes. we can just /:index, etc in all of the routes from here on out since we are in the controller.


//INDEX ROUTE
router.get('/', (req, res) => {
    Dogs.find({}, (err, dogs) => {
        console.log(dogs, '<-- should be an array of puppies')
        res.render('index.ejs', {
            dogs: dogs
        })
    })
});

//SHOW ROUTE
router.get('/:id', (req, res) => {
    console.log(req.params, "<---- req.params");
    console.log('/dogs/:id')
    Dogs.findById(req.params.id, (err, dogs) => {
      if(err){
        res.send(err);
      } else {
        res.render('show.ejs', {
          dogs: dogs
        });
      }
    })
  });

// this enables the controller to export the data it is working with    
module.exports = router;