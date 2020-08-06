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

//delete user /api/users/:id
app.delete("/api/users/:id", (req,res) => {
   const {id} = req.params;

   const remove=db.deleteUser(id)
      if(remove){
         res.status(204).end();
      }else{
         res.status(404).json({successful: "user deleted"})
      }
}); //delete user /api/users/:id

//put request
app.put("/api/users/:id", (req,res) => {
   const {id} = req.params;
   const users = req.body;

   const updated = db.updateUser(id,users)
      if(updated){
         res.status(200).json({ success: "user updated"})
      }else{
         res.status(404).json({ unsuccessful: "user id not found"})
      }
}); //put request to /api/users/:id











const port = 4000

app.listen(port, () =>{
   console.log(`Express is running on port ${port}...`)
})