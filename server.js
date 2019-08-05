const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')
const signin = require('./Controller/Signin')
const register = require('./Controller/Register')
const profile = require("./Controller/Profile");
const image = require("./Controller/image");

const db = knex({
  client: "pg",
  connection: {
    host: "postgresql-tapered-65162",
    user: "postgres",
    password: "admin",
    database: "smart-brain"
  }
});





const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> {
 res.send(database.users);
  
})





app.post("/signin",(req,res) => {signin.handleSignin(req,res,bcrypt,db)});


app.post('/register',(req,res) => {register.signinhandler(req,res,db,bcrypt)})






app.get('/profile/:id',(req,res)=> {profile.profilehandler(req,res,db)});



app.put('/image',(req,res) => {image.imagehandler(req,res,db)});

app.listen(process.env.PORT || 3000, ()=> {
  console.log(`app is running on port ${process.env.PORT}`);
})
