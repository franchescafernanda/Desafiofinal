import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const locations = [
    { path: '/', name: 'home' },
    { path: '/pizzas', name: 'pizzas' },
    { path: '/cart', name: 'cart' },
  ]
  return (
    <div className="navbar">
      <ul>
        {locations.map((location, index) => 
          <li key={`${location.name}-${index}`}>
            <NavLink className={(isActive) => { isActive ? 'active' : null}} to={location.path}>
              {location.name}
            </NavLink>
          </li>
        )
        }
      </ul>
    </div>
  )
}

export default NavBar