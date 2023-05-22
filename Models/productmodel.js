const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prodctSchema = new Schema({
   productname:{
    type:String
   },
   productcost:{
    type:Number
   },
   productinfo:{
    type:String
   },
   productimage:{
    type:String
   }
   
})

const productmodel = mongoose.model('productmodel',prodctSchema)

module.exports = {productmodel}