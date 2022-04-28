import { Link } from 'react-router-dom'
import { RouteLinks } from '../../routes/RoutesLinks'

const Navbar = () => {
  const NavData = [
    {
      title: 'Add Property',
      path: '#',
    },
    {
      title: 'List Property',
      path: 'RouteLinks.listproperty',
    },
  ]

  return (
    <header className="default-layout">
      <nav className="navbar navbar-expand-lg default-layout__inner ">
        <div className="container">
          <Link to={RouteLinks.addproperty} className="navbar-brand">
            <h1 className="navbar-logo">HOME CITY</h1>
          </Link>
          <i
            className="navbar-toggler bi bi-list"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></i>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex justify-content-end mt-2 mb-lg-0">
              {NavData.map((item, index) => {
                return (
                  <li className="navigation__list-item m-2 " key={index}>
                    <Link to={item.path} className="navigation__link  m-2">
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
