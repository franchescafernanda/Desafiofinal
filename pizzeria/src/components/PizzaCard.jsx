import React from 'react';
import { useMyContext } from '../Context/MyContext';

const PizzaCard = (props) => {
  const { desc, img, ingredients, name, price } = props;
  const { addToCart, removeFromCart, cartItems } = useMyContext();

  const itemCountInCart = cartItems[name] || 0;

  const handleAddToCart = () => {
    console.log("Añadir al carrito:", props);
    addToCart(props);
  };

  const handleRemoveFromCart = () => {
    console.log("Quitar del carrito:", name);
    removeFromCart(name);
  };

  return (
    <article>
      <h1>{name}</h1>
      <h2>{desc}</h2>
      <h3>Ingredientes: {ingredients}</h3>
      <p>Valor: {price}</p>
      <img src={img} alt={name} />
      <h2>Llevas: {itemCountInCart}</h2>
      <button onClick={handleAddToCart}>Añadir</button>
      <button onClick={handleRemoveFromCart}>Quitar</button>
    </article>
  );
}

export default PizzaCard;
