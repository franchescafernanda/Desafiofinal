import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
  return (
    <div className="home">
      <h1>!Pizzería Mamma Mía¡🍕</h1>
      <p>!Tenemos las mejores pizzas que podrás encontrar¡</p>
      {props.children}
      <NavLink className={(isActive) => { isActive ? 'active' : null}} to="/pizzas">Ver toda nuestra carta📔</NavLink>
    </div>
  )
}

export default Home