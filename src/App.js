import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
  const [tarea, setTarea] = useState("");
  const [listadoTareas, setListadoTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tarea === "") {
      alert("debe ingresar tarea");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false,
    };

    const temp = [nuevaTarea, ...listadoTareas];
    setListadoTareas(temp);

    setTarea("");

    console.log(listadoTareas);
  };

  const handleChange = (e) => {
    setTarea(e.target.value);
    console.log(tarea);
  };

  function actualizarEditarTarea(objEditarTarea) {
    const { id, tarea } = objEditarTarea;

    const temp = [...listadoTareas];
    const elemento = temp.find((item) => item.id === id);
    elemento.tarea = tarea;

    setListadoTareas(temp);
  }

  function eliminarTarea(id) {
    const temp = listadoTareas.filter((item) => item.id !== id);
    setListadoTareas(temp);
  }

  return (
    <>
      <h1>TO DO with edit buttom</h1>
      <div className="contenedor-formulario">
        <Formulario
          tarea={tarea}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
      <div className="contenedor-tareas">
        <h2>Listado de tareas</h2>
        <div className="contenedor-litatareas">
          {listadoTareas.map((tarea) => (
            <Lista
              key={tarea.id}
              id={tarea.id}
              tarea={tarea}
              listadoTareas={listadoTareas}
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

//https://www.youtube.com/watch?v=KK1zikMuYjk&list=WL&index=3&t=13s
