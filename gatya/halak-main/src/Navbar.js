import { NavLink } from 'react-router-dom'

export default function Navbar() {

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <NavLink to={"/"} className="btn btn-outline-success" type="button">Halak</NavLink>
        <NavLink to={"/horgaszok"} className="btn btn-sm btn-outline-secondary" type="button">Horgászok</NavLink>
        <NavLink to={"/balaton"} className="btn btn-sm btn-outline-secondary" type="button">Balaton</NavLink>
      </form>
    </nav>
  )
}
