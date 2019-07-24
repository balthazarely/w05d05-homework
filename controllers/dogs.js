const express = require("express");
const router = express.Router();
const Dogs = require('../models/dogs.js');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

router.use(bodyParser.urlencoded({extended: false}));
router.use(methodOverride('_method'));

// since we are already in the controller, we dont need to say "/dogs" in any of the routes. we can just /:index, etc in all of the routes from here on out since we are in the controller.

//INDEX ROUTE
router.get('/', (req, res) => {
    Dogs.find({}, (err, dogs) => {
        // console.log(dogs, '<-- should be an array of puppies')
        res.render('index.ejs', {
            dogs: dogs
        })  
    })
});


//CREATE ROUTE
router.post('/', (req, res)=>{
  Dogs.create(req.body, (error, createdDog)=>{
    console.log(req.body)
     res.redirect('/dogs')
 });
});


//NEW ROUTE
router.get('/new', (req, res) => {
  res.render('new.ejs')
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


//EDIT & UPDATE ROUTE
router.get('/:id/edit', (req, res) => {
  console.log("the edit route is running")
    Dogs.findById(req.params.id, (err, foundDog) => {
      res.render('edit.ejs', {
        dogs:foundDog, 
      }
    );
  });
});
  
// router.put('/:id', (req, res) => {
//     Dogs.findOneAndUpdate[req.params.id] = req.body, (err, updatedModel) => {
//       res.redirect('/dogs');
//   };
// });

router.put('/:id', (req, res) => {
  Dogs.findByIdAndUpdate(req.params.id, req.body, (err, updateResponse) => {
          console.log(updateResponse, "< put route response from db");
          // should bring you back to the specific show page.
          res.redirect('/dogs/' + req.params.id);
      
  })
})

  
//DELETE ROUTE
router.delete('/:id', (req, res)=>{
  Dogs.findByIdAndDelete(req.params.id, (err, data)=>{
    console.log(req.params.id)
  
    res.redirect('/dogs');
  });
});

// this enables the controller to export the data it is working with 
module.exports = router;