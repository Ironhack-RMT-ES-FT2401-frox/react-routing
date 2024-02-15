// pagina para ver perfiles de otros usuarios
import { useParams } from "react-router-dom"
// .todos los hooks son funciones y se debemos invocar dentro del componente

import allUsersJSON from "../assets/data/users.json" 
// console.log(allUsersJSON)

function Profile() {

  const params = useParams()
  console.log(params)

  const filteredUsers = allUsersJSON.filter((eachUser) => {
    // console.log(eachUser.id) // un numero
    // console.log(params.userId) // un string
    if (eachUser.id == params.userId) {
      return true
    } else {
      return false
    }
  })
  console.log(filteredUsers)
  const foundUser = filteredUsers[0]

  return (
    <div>

      <h1>Pagina de perfil</h1>

      <p>Estas viendo el perfil de {params.userId} </p>

      <p>id: {foundUser.id}</p>
      <h3>nombre: {foundUser.username} </h3>
      <p>ciudad: {foundUser.city}</p>

    </div>
  )
}

export default Profile