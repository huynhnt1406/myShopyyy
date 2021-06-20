import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../store/action/userAction'
function Homepage({addToCart}) {
    
    const [products,setProducts] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3333/products')
            .then(res => setProducts(res.data))
            .catch(err =>{
                console.log(err)
            })
    }, [])

    return (
        <div>
            {
               products.map(product => (
                   <p key={product._id}>{product.name}<button onClick={() => {addToCart(product)}}>Add To Cart</button></p>
               )) 
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.products.products
})

export default connect(mapStateToProps, {addToCart})(Homepage)
