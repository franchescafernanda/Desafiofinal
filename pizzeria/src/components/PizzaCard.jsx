// PizzaCard.jsx
const PizzaCard = (props) => {
  const { desc, img, ingredients, name, price } = props
  return (
    <article>
      <h1>{name} </h1>
      <h2>{desc}</h2>
      <h3>ingredientes: {ingredients}</h3>
      <p>Valor: {price}</p>
      <img src={img} alt={name} />
    </article>
  )
}

export default PizzaCard
