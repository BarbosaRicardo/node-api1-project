const express = require('express');
let db = require("./db.js")
const app = express()

app.use(express.json())


//routes

//post request to /api/users
app.post("/api/users", (req,res) => {
   const newUser = req.body;

   //when request body is missing name or bio
   const newU = db.createUser(newUser)
      if(newU){
         res.status(200).json({success:"user insert success"})
      }else{
     
         res.status(500).json({errorMessage: "failed to insert user"})
      }
}); //post request 

//get request to /api/users
app.get("/api/users", (req,res) => {
   const users = db.getUsers()
      if(users){
         res.status(200).json({success: "found users", users})
      }else{
         res.status(500).json({unsuccessful: "user not found", error})
      }
}); //get request to /api/users

//get request to /api/users/:id
app.get("/api/users/:id", (req,res) => {
   const {id} = req.params;

   const Userid = db.getUserById(id)
      if(Userid){
         res.status(200).json({ success: "users found"})
      }else{
         res.status(500).json({ unsuccessful: "user not found"})
      }
})













const port = 4000

app.listen(port, () =>{
   console.log(`Express is running on port ${port}...`)
})