
import mongoose from 'mongoose'


const schema = new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    rating:{
        type:Number
    },
    image1:{
        type:String
    },
    image2:{
        type:String
    },
    image3:{
        type:String
    },
    image4:{
        type:String
    },
})

export const ProductModel = mongoose.model('product', schema)