const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    data:{
        type:String,
        required:true,
    },
    createdAt :{
        type:Date,
        default: Date.now(),
    },
})

module.exports = new mongoose.model('Todo',TodoSchema)