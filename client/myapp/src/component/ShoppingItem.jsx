import React from 'react'
import {connect} from 'react-redux'
import {removeItem} from '../store/action/userAction'
function ShoppingItem({id, name, removeItem}) {


    const deleteItem = (id) => {
        removeItem(id)
    }

    return (
        <div>
            <p>{name}<button onClick = {deleteItem.bind(this,id)} >Remove</button></p>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps,{removeItem})(ShoppingItem)
