import React from 'react'
import { useMyContext } from '../Context/MyContext'

const PizzaCard = (props) => {
  const { desc, img, ingredients, name, price } = props
  const { addToCart, removeFromCart, cartItems } = useMyContext()

  const itemCountInCart = cartItems[name] || 0

  const handleAddToCart = () => {
    console.log("Añadir al carrito:", props)
    addToCart(props)
  }

  const handleRemoveFromCart = () => {
    console.log("Quitar del carrito:", name);
    removeFromCart(name);
  }

  return (
    <article className="pizza-card">
      <img src={img} alt={name} />
      <div className="pizza-info">
        <h2>{name}</h2>
        <h3>{desc}</h3>
        <p>Ingredientes: {ingredients}</p>
        <p>Valor: ${price}</p>
      </div>
      <div className="button-container">
        <button onClick={handleAddToCart}>Añadir</button>
        <button onClick={handleRemoveFromCart} disabled={!itemCountInCart}>Quitar</button>
      </div>
      <p>Llevas: {itemCountInCart}</p>
    </article>
  )
}

export default PizzaCard