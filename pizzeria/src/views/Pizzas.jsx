import { useParams } from "react-router"
import PizzaCard from "../components/PizzaCard"

const Pizzas = (props) => {
  const { selectedId } = useParams()
  return (
    <div className="pizza-container">
      <h1>Pizzas {props.from == 'home' ? 'Favoritas': ''} {selectedId}</h1>
      <div className="pizza-grid">
        {
          props.data ? props.data.map((pizza, index) =>{
            return props.from == 'home' && pizza.highlighted == true ?
            <PizzaCard {...pizza} key={`${pizza.name}-${index}`}/>
            : props.from != 'home' ?
            <PizzaCard {...pizza} key={`${pizza.name}-${index}`}/>
            : null
          }
          ) : null
        }
      </div>
    </div>
  )
}

export default Pizzas