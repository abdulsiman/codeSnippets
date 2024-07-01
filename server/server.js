import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import userModel from "./configDB.js";
const app=express();
const PORT = 5174;
// 1111 = username and password correct
// 9999 = username correct and password wrong
// 8888 = username wrong and password ?

app.use(cors())
app.use(express.json())// enable middleware to parse body of Content-type: application/json


await mongoose.connect("mongodb://localhost:27017/CodesnippetDB")
console.log("database Connected!");



// This is setting for get request
app.get("/api",(req,res)=>{
    console.log("request..")
    res.send({
        username:"test",
        password:"test123",
    })
})

app.post("/api/signup",async(req,res)=>{
    console.log(req.body);
    let fetched_db_data= await userModel.findOne({"db_username":req.body.username});
    if (fetched_db_data!==null) {
        // if udername is used
        // console.log(fetched_db_data)
        res.send(JSON.stringify({
            usernamePresent:true,
            detailsUpdate:"no"
        }))
    }
    else{
        // if inserted ,This returns an object array which has inserted documents in it
        let varaible=await userModel.insertMany({
            db_username: req.body.username,
            db_password: req.body.password,
        })
        if (varaible[0].db_username===req.body.username) {
            res.send(JSON.stringify({
                usernamePresent:false,
                detailsUpdate:"yes"
            }))
            console.log(varaible)
        }
        else{
            res.send(JSON.stringify({
                usernamePresent:false,
                detailsUpdate:"no"
            }))

        }
    }
})

app.post("/api/login",async(req,res)=>{

    let fetched_db_data= await userModel.findOne({"db_username":req.body.username});
    // Check If the username is present in database
    if(fetched_db_data===null){
        res.send(JSON.stringify({
            login_status_code:8888,
            root_status:"failure",
        }))
    }
    else{
    // Check If the user is root 
        if (req.body.username=="root"&&req.body.password=="access123") {
            console.log("Access Granted!");
            res.send( JSON.stringify({
                root_status:"success",
            }));
        }   
        // if not:
        else{
            // for this below line of code to work and the recived data to be readable this line must be awaited inside an async function 
            console.log(fetched_db_data)
             // Check If the password is correct
            if (req.body.password===fetched_db_data.db_password) {
                res.send(JSON.stringify({
                    login_status_code:9999,
                    root_status:"failure",
                }))
            }
            else{
                res.send(JSON.stringify({
                    login_status_code:1111,
                    root_status:"failure",
                }))
            }
            
        }
    }


})

// app.get("/api/test",async(req,res)=>{
//     let trash = await userModel.find()
//     console.log(trash)
// })


app.listen(PORT,()=>{
    console.log("Server running at localhost"+PORT );
})
