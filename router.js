const { error } = require('console');
const express = require('express')
const router = express.Router()

const credentials = {
    username : "thafsalthafsu@gmail.com",
    password : "123123"
};

router.post('/login' , (req,res)=>{
    if(req.body.username == credentials.username && req.body.password == credentials.password){
        req.session.user = req.body.username
        res.redirect("/route/dashboard")
        res.end()
    }else{
        res.send("Invalid details")
    }
} )

router.get('/dashboard',(req,res) =>{
    if(req.session.user){
         res.render('dashboard',{user : req.session.user})
    }else{
        req.send("UnAuthorized Access")
    }
})
router.get('/logout',(req,res) =>{
    req.session.destroy((error) =>{
        if(error) {
            throw error
        }else{
            res.render('base' , {title :"Login Page" , content : "Succesfully logged out"})
        }
    })
})




module.exports = router ;