import { ProductModel } from "../model/itemModel.js"


export const getAll = async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}

export const getOne = async (req,res) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        console.log('product',product)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}

export const addOne = async (req,res) => {
    try {
        const newProduct = req.body
        const product = new ProductModel(newProduct)
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}

export const updateOne = async (req,res) => {
    try {
        const updateProduct = req.body
        const product = await ProductModel.findOneAndUpdate(req.params._id ,updateProduct, {new:true})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}

export const deleteOne = async (req,res) => {
    try {
        const product = await ProductModel.findOneAndDelete(req.params._id)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}