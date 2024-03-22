import React from "react";

function Formulario ({handleSubmit, handleChange, tarea})  {

 // const {handleSubmit, handleChange} = props;


  return (
    <form action="">
      <input value={tarea} onChange={handleChange} type="text" placeholder="ingrese tarea"/>
      <input onClick={handleSubmit} type="submit" className="btnagregar"  value="AGREGAR"/>
    </form>
  )
}

export default Formulario;