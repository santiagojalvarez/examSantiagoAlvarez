import { useState } from "react";
import Card from "./Components/card";
import "./App.css"

function App() {

  const [user, setUser] = useState({
    nombre:"",
    color:""
  })

  const[show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) =>{
    event.preventDefault()
    if (user.nombre.length > 3 && user.nombre[0] !== " " && user.color.length >5) {
      setShow(true)
      
    }else{
      setError(true)

    }
  }

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <label>Ingresa tu nombre </label>
        <input type="text" onChange={(e) => setUser({...user, nombre: e.target.value})} />
        <label>Ingresa tu color favorito(formato HEX) </label>
        <input type="text" onChange={(e) => setUser({...user, color: e.target.value})} />
        <button> Enviar </button>
      </form>
      { show &&   <Card nombre={user.nombre} color={user.color}/>}
      {error && "Por favor chequea que la informacion sea correcta"}
    </div>
  );
}


export default App;
