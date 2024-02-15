
function MyProfile(props) {

  console.log(props)
  return (
    <div>
      
        <h1>Pagina para ver mi perfil</h1>

        <h3>nombre: {props.user.name}</h3>
        <p>lugar: {props.user.location}</p>

    </div>
  )
}

export default MyProfile