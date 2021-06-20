import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import product from './router/products.js'
const app = express()
const PORT = process.env.PORT || 3333
const MONGO_URL = 'mongodb+srv://admin:huynhnguyenbkak63@cluster0.dcdts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

///

mongoose.connect(MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:true} ) 
    .then(
        console.log('db connected'),
        app.listen(PORT , () => {
            console.log(`Server is running on PORT ${PORT}`)
        })
    )
    .catch((err) => {
        console.log(err)
    })
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/products',product)
