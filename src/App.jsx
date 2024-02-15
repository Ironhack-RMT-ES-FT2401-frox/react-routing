import About from "./pages/About"
import HomePage from "./pages/HomePage"

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Location from "./pages/Location";
import Navbar from "./components/Navbar";
import MyProfile from "./pages/MyProfile";
import { useState } from "react";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

// cuando usamos react-router-dom, App.js se convierte en un gestor de mi pagina
function App() {

  const [ userInfo, setUserInfo ] = useState({ name: "jorge", location: "barcelona", id: 1234 })
  const [ userInfo2, setUserInfo2 ] = useState({ name: "josep", location: "valencia", id: 1234 })
  // no usaremos el setUserInfo porque no estamos trabajando con autenticación

  return (
    <div>

      <Navbar />

      <Routes>
        {/* aqui organizamos todas las rutas de acceso de nuestra web */}
        {/* esto funciona como un condicional. Unicamente una pagina va ser renderizada */}

        <Route path={"/"} element={ <HomePage /> }/>
        <Route path={"/conocenos"} element={ <About /> }/>
        <Route path={"/location/sede"} element={ <Location /> }/>
        <Route path={"/my-profile"} element={ <MyProfile user={userInfo}/>} />
        <Route path={"/my-profile/2"} element={ <MyProfile user={userInfo2}/>} />

        {/* <Route path={"/profile/juliette"} element={ <Profile /> }/>
        <Route path={"/profile/leidy"} element={ <Profile /> }/> */}

        {/* <Route path={"/profile/:username"} element={<Profile />}/> */}
        {/* :username define una dirección dinamica que tiene nombre username y como valor lo que haya colocado el usuario en el URL */}

        <Route path={"/profile/:userId"} element={<Profile />}/>

        {/* que pasa si el usuario va a una pagina que no existe */}
        {/* gestores de errores 404 */}
        <Route path={"*"} element={ <NotFound /> }/>
        {/* * representa cualquier URL */}

      </Routes>
      



    </div>
  )
}

export default App
