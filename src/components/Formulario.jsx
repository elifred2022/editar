function Formulario ({handleSubmit, handleChange, nombre, comida})  {

  

 


  return (
    <form action="">
      <input value={nombre} onChange={handleChange} type="text" placeholder="ingrese nombre"/>
      <input value={comida} onChange={handleChange} type="text" placeholder="ingrese comida"/>
      <input onClick={handleSubmit} type="submit" className="btnagregar"  value="AGREGAR"/>
    </form>
  )
}

export default Formulario;