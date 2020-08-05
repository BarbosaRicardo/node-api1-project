const express = require('express');
let db = require("./db.js")
const app = express()

app.use(express.json())


//routes

//post request to /api/users
app.post("/api/users", (req,res) => {
   const newUser = req.body;

   //when request body is missing name or bio
   db.insert(newUser)
      .then(user=>{
         res.status(200).json({success:"user insert success", user})
      })
      .catch(error=>{
         res.status(500).json({errorMessage: "failed to insert user", error})
      })
}); //post request 

//get request to /api/users












const port = 4000

app.listen(port, () =>{
   console.log("Express is running...")
})