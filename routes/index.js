var express = require('express');
var router = express.Router();
const UserModel = require('../model/UserModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Methot To Create New User
router.post('/createUser', async(req, res)=>{
  try {
    let newUser = await new UserModel(req.body).save();

    return res.send(newUser).status(201);
  } catch (err) {
    return res.send(err.message).status(500);
  }
});

//Method To Get All Users
router.get('/getAllUsers', async(req, res)=>{
  try {
    let users = await UserModel.find();
    return res.send(users).status(200);
    
  } catch (err) {
    return res.send(err.message).status(500);
  }
});

//Method To Update User
router.put('/editUser/:userId', async(req, res)=>{
  try {
    let user = await UserModel.findOneAndUpdate({_id: req.params.userId}, {$set: req.body}, {new: true});
    return res.send(user).status(201);
  } catch (err) {
    return res.send(err.message).status(500);
  }
});

//Method To Delete User
router.delete('/deleteUser/:userId', async(req, res)=>{
  try {
    await UserModel.findOneAndDelete({_id: req.params.userId});
    return res.sendStatus(200);
  } catch (err) {
    return res.send(err.message).status(500);
  }
})

module.exports = router;
