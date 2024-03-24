function Formulario ({handleSubmit, handleChange, nombre})  {

  

 


  return (
    <form action="">
      <input value={nombre} onChange={handleChange} type="text" placeholder="ingrese nombre"/>
      <input onClick={handleSubmit} type="submit" className="btnagregar"  value="AGREGAR"/>
    </form>
  )
}

export default Formulario;