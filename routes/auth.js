const express = require('express');
const jwt = require('jsonwebtoken');
const AddUser = require('../models/AddUser');

const router = express.Router();

// test post
router.post('/login', (req, res)=>{
  AddUser.findOne({email: req.body.email})
  .then( (data) => {
    const user = data
    if(!user) 
      sendautherror(res) 
    if(user.password == req.body.password) 
      sendToken(user, res)
    else
      sendautherror(res)
  })
  .catch(error => {
    console.log("error: ", error)
  })
})

function sendautherror(res){
  return res.json({success: false, msg: "email or password incorrect"});
}

// Routes
router.post('/register', (req, res) => {
  const user = req.body;
  const newUser = new AddUser(user);
  // save user to db
  newUser.save((error) => {
    if(error){
      res.status(500).json({msg: 'Sorry: Internal Server error'});
    }else{
      console.log(res.json({msg: "data received and successfully"}))
    }
  });
});

function sendToken(user, res){
  const token = jwt.sign(user.id, '77')
  res.json({firstname: user.firstname ,token});
}

router.get('/users', (req, res) => {
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