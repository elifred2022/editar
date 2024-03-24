import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
  const [nombre, setNombre] = useState("");
  const [comida, setComida] = useState("");
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    // Almacena los elementos d comida en localStorage cada vez que cambien
    localStorage.setItem("elementos", JSON.stringify(elementos));
  }, [elementos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "") {
      alert("debe ingresar tarea");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      nombre: nombre,
      completado: false,
    };

    const temp = [nuevaTarea, ...elementos];
    setElementos(temp);

    setNombre("");
    setComida("");

    console.log(elementos);
  };

  const handleChange = (e) => {
    setNombre(e.target.value);
    setComida(e.target.comida);
    console.log(nombre, comida);
  };

  function actualizarEditarTarea(objEditarTarea) {
    const { id, nombre, comida } = objEditarTarea;

    const temp = [...elementos];
    const elemento = temp.find((item) => item.id === id);
    elemento.nombre = nombre;
    elemento.comida = comida;

    setElementos(temp);
  }

  function eliminarTarea(id) {
    const temp = elementos.filter((item) => item.id !== id);
    setElementos(temp);
  }

  return (
    <>
      <h1>TO DO with edit buttom</h1>
      <div className="contenedor-formulario">
        <Formulario
          elementos={elementos}
          nombre={nombre}
          comida={comida}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
      <div className="contenedor-tareas">
        <h2>Listado de tareas</h2>
        <div className="contenedor-litatareas">
          {elementos.map((nombre) => (
            <Lista
              key={nombre.id}
              id={nombre.id}
              nombre={nombre}
              comida={comida}
              elementos={elementos}
              actualizarEditarTarea={actualizarEditarTarea}
              eliminarTarea={eliminarTarea}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
