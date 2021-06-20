import React from 'react'
import {connect} from 'react-redux'
import { Badge} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons'
import ShoppingItem from './ShoppingItem';
function ShoppingBasket({myItems}) {
    return (
        <div>
            <div>
                <h3>My Shopping Cart</h3>
                <Badge count={myItems.length}>
                    <ShoppingCartOutlined style={{ fontSize: '30px' }}/>
                </Badge>
            </div>
            <div>
                {
                    myItems.map(item => (
                        <ShoppingItem key={item._id} id={item._id} name={item.name}/>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    myItems : state.carts.carts
})

export default connect(mapStateToProps,{})(ShoppingBasket)
