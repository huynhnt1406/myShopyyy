
import React, { useState } from 'react'
import './AddProduct.css'
import {connect} from 'react-redux'
import {addProduct} from '../store/action/productAction'

function AddProduct({addProduct}) {
    const [product, setProduct ] = useState({
        name :'',
        description : '',
        price : '',
        image1 : '',
        image2 : '',
        image3 : '',
        image4 : '',
    })

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
            const newProduct ={
                name:product.name,
                description:product.description,
                price:product.price,
                image1:product.image1,
                image2:product.image2,
                image3:product.image3,
                image4:product.image4,
            }
            setProduct({
                name :'',
                description : '',
                price : '',
                image1 : '',
                image2 : '',
                image3 : '',
                image4 : '',
            })
            addProduct(newProduct)
    }
    return (
        <form className="form-product" onSubmit={handleSubmit}>
            <h1>Add item to store</h1>
            <div className="form-child">
                <label>Title</label>
                <input type="text" name="name" value={product.name} placeholder="Title of item" onChange={handleChange}/>
            </div>
            <div className="form-child">
                <label>Description</label>
                <input type="text" name="description" value={product.description} placeholder="Description " onChange={handleChange}/>
            </div>
            <div className="form-child">
                <label>Price</label>
                <input type="text" name="price" value={product.price} placeholder="Price" onChange={handleChange}/>
            </div>
            <div className="form-child">
                <label>Image 1</label>
                <input type="text" name="image1" value={product.image1} placeholder="Image url 1 " onChange={handleChange}/>
            </div>
            <div className="form-child">
                <label>Image 2</label>
                <input type="text" name="image2"  value={product.image2} placeholder="Image url 2" onChange={handleChange}/>
            </div>
            <div className="form-child">
                <label>Image 3</label>
                <input type="text" name="image3"  value={product.image3} placeholder="Image url 3" onChange={handleChange}/>
            </div>
            <div className="form-child">
                <label>Image 4</label>
                <input type="text" name="image4"  value={product.image4} placeholder="Image url 4" onChange={handleChange}/>
            </div>
            <div className="form-child">
                <button style={{padding:5, backgroundColor:'green' , color:'white',border:'none', borderRadius:10}} type="submit">Add to Store</button>
            </div>
        </form>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps,{addProduct})(AddProduct)
