function Formulario ({handleSubmit, handleChange, tarea})  {

  

 


  return (
    <form action="">
      <input value={tarea} onChange={handleChange} type="text" placeholder="ingrese tarea"/>
      <input onClick={handleSubmit} type="submit" className="btnagregar"  value="AGREGAR"/>
    </form>
  )
}

export default Formulario;