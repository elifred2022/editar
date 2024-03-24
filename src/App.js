import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
  const [nombre, setNombre] = useState("");
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

    console.log(elementos);
  };

  const handleChange = (e) => {
    setNombre(e.target.value);
    console.log(nombre);
  };

  function actualizarEditarTarea(objEditarTarea) {
    const { id, nombre } = objEditarTarea;

    const temp = [...elementos];
    const elemento = temp.find((item) => item.id === id);
    elemento.nombre = nombre;

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
