
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Pizzas from './views/Pizzas'
import Cart from './views/Cart'
import NotFound from './views/NotFound'
import NavBar from './components/NavBar'
import { useState, useEffect } from 'react'
import { MyContextProvider } from './Context/MyContext'
import './App.css'

function App() {
  const [dataPizzas, setDataPizzas] = useState([])

  const getPizzas = async () => {
    const data = await fetch('pizzas.json')
    const res = await data.json()
    const adaptedPizzas = res.map(pizza => ({ ...pizza, count: 0 }))
    setDataPizzas(adaptedPizzas)
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <MyContextProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home>
                <Pizzas from="home" data={dataPizzas} />
              </Home>
            }
          />
          <Route path="/pizzas" element={<Pizzas data={dataPizzas} />} />
          <Route path="/pizzas/:selectedId" element={<Pizzas data={dataPizzas} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </MyContextProvider>
  )
}

export default App