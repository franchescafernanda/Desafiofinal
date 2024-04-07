import React from 'react'
import { useMyContext } from '../Context/MyContext'

const Cart = () => {
  const { cartItems } = useMyContext()

  // Calculo del total
  const total = Object.entries(cartItems).reduce((acc, [itemName, quantity]) => {
    // no me tomo el valor de price
    const itemPrice = 10
    return acc + itemPrice * quantity
  }, 0)

  return (
    <div>
      <h1 className='carrito'>Carrito de compras🛒</h1>
      <ul>
        {Object.entries(cartItems).map(([itemName, quantity]) => (
          <li key={itemName}>
            {itemName} - Cantidad: {quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  )
}

export default Cart
