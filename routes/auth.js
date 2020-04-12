const express = require('express');
const jwt = require('jsonwebtoken');
const AddUser = require('../models/AddUser');

const router = express.Router();

// test post
router.post('/login', (req, res)=>{
  // res.json({ msg: "testing the post request !!1"})
  const user = AddUser.find(req.body.email);
  if(!user) return res.json({success: false, msg: "email or password incorrect"});

  if(user.password == res.body.password){
    res.json(user)
  }else {
    res.json({success: false, msg: "email or password incorrect"})
  }
})

// Routes
router.post('/register', (req, res) => {
  console.log("Body: ", req.body);
  const data = req.body;

  const newUser = new AddUser(data);
  // save data to db
  newUser.save((error) => {
    if(error){
      res.status(500).json({msg: 'Sorry: Internal Server error'});
    }else{
      res.json({
        msg: 'we received and save your data'
      });
    }
  });
});

router.get('/user', (req, res) => {
  AddUser.find({ })
  .then((data) => {
    console.log('Data: ', data);
    res.json(data);
  })
  .catch((error) => {
    console.log('Error: ', error);
  });
});

module.exports = router;