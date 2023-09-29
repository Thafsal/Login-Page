const express = require("express")
const path = require('path')
const session = require('express-session')
const {v4:uuidv4} = require('uuid')

const app = express()
const route = require('./router')



// view engine setup
app.set('view engine' , 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Static files

app.use(express.static(path.join(__dirname , 'public')))

//session set-up

app.use(session({
    secret : uuidv4(),
    resave : false,
    saveUninitialized : true
}))

// PORT Setup
const PORT  =  process.env.PORT || 3000 ;

app.get("/", (req,res) =>{
    res.render("base" , { value:"Login page"})
})

app.use('/route',route)


app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})