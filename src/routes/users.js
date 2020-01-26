const express = require('express');
const router = express.Router();
const session = require ('express-session');
const User = require('./../models/users')


router.get('' , (req,res)=> {
    User.findUsers(req, (error,response)=>{
        if(error) {
            console.log('Error : ',error);
           
        }
        if(response) {
            console.log('Success Response is : ',response);
            res.send(response);
        }
    });
})

router.get('/checkUser',(req,res)=>{
    if(!req.session.user) {
        return res.status(401).send();
    }
    else
    {
        return res.status(200).send('success');
    }
})

router.post('/login',(req,res)=>{
    User.checkForUser(req, (error,response)=>{
        if(error) {
            console.log('Error : ',error);
            return res.status(400).send();
        }
        if(!response) {
            console.log('User not found');
            return res.status(404).send();
        }
        if(response) {
            console.log('Success Response is : ',response);
            res.send(response)
        }
    })
})

router.post('/register',(req,res)=>{
   
    User.addUsers(req,(error,response)=>{
        if(error) 
        {
            console.log('Error : ',error);
            return res.status(500).send();
        }
        if(response) {
            console.log('Success Response is: ',response);
            res.send(response)
        }
    });
    //res.send('Users response from router');        
})

router.get('/logout',(req,res)=>{
    req.session.destroy();
    return res.status(200).send();
})

module.exports = router;