const express = require('express');

const app = express();

const PORT = 5000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/', (req,res)=>{

    res.json("name: Hello");
})

app.listen(PORT, ()=>{

    console.log(`The port is started on ${PORT}`)
})