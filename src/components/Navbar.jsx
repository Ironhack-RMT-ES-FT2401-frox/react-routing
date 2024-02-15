import { Link } from "react-router-dom"
import allUsersJSON from "../assets/data/users.json"
// console.log(allUsersJSON)

function Navbar() {
  return (
    <div>
      
      {/* <a href="/">Casa</a>
      <a href="/conocenos">Conocenos</a>
      <a href="/location/sede">Ver ubicación</a> */}

      {/* EN REACT NUNCA DEBEMOS USAR <a> PARA ENLACES INTERNOS */}

      <Link to={"/"}>Casa</Link>
      <br />
      <Link to={"/conocenos"}>Conocenos</Link>
      <br />
      <Link to={"/location/sede"}>Ver ubicación</Link>
      <br />
      <Link to={"/my-profile"}>Ver mi perfil</Link>
      <br />
      {/* <Link to={"/profile/juliette"}>Ver perfil de Juliette</Link>
      <br />
      <Link to={"/profile/leidy"}>Ver perfil de Leidy</Link> */}

      {allUsersJSON.map((eachUser) => {
        return (
          <p>
            <Link to={`/profile/${eachUser.id}`}>{eachUser.username}</Link>
          </p>
        )
      })}

      


    </div>
  )
}

export default Navbar