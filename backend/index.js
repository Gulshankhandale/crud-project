const express = require('express');

const app = express();

const PORT = 5000;

const DBcon = require('./dbcon');

const bodyParser = require('body-parser');

DBcon;

const userModel = require('./Models/userModel');

const cors = require('cors');

const bcrytptjs = require('bcryptjs');

const jwt = require('jsonwebtoken');

app.use(bodyParser.json());

app.use(cors());



app.get('/', async (req,res)=>{

    const user = await userModel.find();

    try{
        res.json(user).status(200)
    }
    catch(err){
        console.log(err)
    }
})

app.post('/useradd', async (req,res)=>{

    const user = new userModel({
        name:req.body.password,
        password:req.body.password,
    })

    try{
        await user.save();
    }
    catch(err){
        console.log(err)
    }
})

app.post('/add', async (req,res)=>{

    const pass = await bcrytptjs.hash(req.body.password, 10)

    const user = new userModel({
        name: req.body.name,
        password: pass,
    })

    try{

        await user.save();

        res.send('user created')
    }
    catch(err){
        console.log(err)
    }
})

app.post('/login', async (req,res)=>{

    const body = req.body;

    const user = await userModel.findOne({email: body.email})

    if(user){
        const validPassword = await bcrytptjs.compare(body.password, user.password)

        if(validPassword){
            

            let jwtToken = jwt.sign({
                email: body.email,
                userid: body._id,
            }, "longer-secret-is-better",{
                expiresIn:"1h"
            }
            )
            res.status(200).json({token: jwtToken, exopiresIn:"3600", message:"login successful and jwt signed"})
        }else{
            res.status(200).json({error:"password not matched"})
        }
    }else{
        res.status(401).json({error:"user does not exit"})
    }
})

app.listen(PORT, ()=>{

    console.log(`The port is started on ${PORT}`)
})