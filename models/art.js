const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artSchema = new Schema({
    Artist: {type:String, required:true},
    medium: {type:String, required:true},
    year: {type:Number, default: 1900},
},{
    timestamps: true
})

module.exports = mongoose.model('Art', artSchema)