// App.jsx
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Pizzas from './views/Pizzas'
import Cart from './views/Cart'
import NotFound from './views/NotFound'
import NavBar from './components/NavBar'
import { useState, useEffect } from 'react'

function App() {
  const [dataPizzas, setDataPizzas] = useState([])

  const getPizzas = async () => {
    const data = await fetch('pizzas.json')
    const res = await data.json()
    const adaptedPizzas = []
    res.forEach(pizza => {
      adaptedPizzas.push({ ...pizza, count: 0 })
    })
    setDataPizzas(adaptedPizzas)
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizzas' element={<Pizzas data={dataPizzas} />} />
        <Route path='/pizzas/:selectedId' element={<Pizzas data={dataPizzas} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
