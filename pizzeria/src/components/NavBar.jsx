// NavBar.jsx
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const locations = [
    { path: '/', name: 'home' },
    { path: '/pizzas', name: 'pizzas' },
    { path: '/cart', name: 'cart' },
  ]
  return (
    <ul>
      {locations.map((location, index) => (
        <li key={`${location.name}-${index}`}>
          <NavLink
            activeClassName="active"
            className="nav-link"
            to={location.path}
          >
            {location.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default NavBar
