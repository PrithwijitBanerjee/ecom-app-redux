import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart } from '../Stores/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => {
    console.log('Cart Items Array:', state?.productsCart?.cartProducts);
    return state?.productsCart?.cartProducts;
  });
  return (
    <>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
          (cartItems?.length === 0) ? <>
            <div className='cartCard'>
              <h5 style={{ width: '50%', margin: 'auto' }}>Cart is Empty</h5>
            </div>
          </> : <>
            {cartItems?.map((product) => (
              <div key={product.id} className="cartCard">
                <img src={product.images[`${0}`]} alt="" height='200px' width='200px' />
                <h5>{product.title}</h5>
                <h5>Price:  RS.{product.price}</h5>
                <button
                  className="btn"
                  onClick={() => dispatch(removeCart(product?.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </>
        }
      </div>
    </>
  )
}

export default Cart