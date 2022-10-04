const mongoose = require('mongoose');

const mongouri = "mongodb+srv://admin:admin123@cluster0.noakssz.mongodb.net/?retryWrites=true&w=majority"

const DBCon = mongoose.connect(mongouri, ()=>{
    try{

        console.log("DB is connected")
    }catch(err){
        console.log(err)
    }
})

module.exports = DBCon;