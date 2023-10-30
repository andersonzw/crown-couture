import React from 'react'
import Button from "../button/Button"
import "./CartDropDown.scss"
const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items"></div>
        <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropDown