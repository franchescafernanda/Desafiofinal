import { useParams } from "react-router"
import PizzaCard from "../components/PizzaCard"

const Pizzas = (props) => {
  const { selectedId } = useParams()
  return (
    <div>
      <h1>Pizzas {selectedId}</h1>
      {
        props.data.map((pizza, index) =>
        <PizzaCard {...pizza} key={`${pizza.name}-${index}`}/>
        )
      }
    </div>
  )
}

export default Pizzas
