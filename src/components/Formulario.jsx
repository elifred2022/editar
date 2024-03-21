import React, { useState } from 'react';


const Formulario = () => {
  
  const [nombre, setNombre] = useState('');
  const [comida, setComida] = useState('');
  const [valorComida, setValorComida] = useState('');
  const [modoEdicion, setModoEdicion] = useState(false);


 const [elementos, setElementos] = useState([]);

  const agregarElemento = (nuevoElemento) => {
    setElementos([...elementos, nuevoElemento]);
  };
  
  const eliminarElemento = (index) => {
    const nuevosElementos = [...elementos];
    nuevosElementos.splice(index, 1);
    setElementos(nuevosElementos);
  };

  const primeraEdicon = (index) => {
    setNombre(index.nombre);
    setComida(index.comida);
    setValorComida(index.valorComida);
    setModoEdicion(true);
  }

  const edicionFinal = (e, index) => {
    e.preventDefault()
    const editado = elementos.map(item => item.index === index ? {nombre, comida, valorComida} : item)
    
    setElementos(editado);
    setModoEdicion(false);
    setNombre('');
    setComida('');
    setValorComida('');
  }

  const botonAgrgar = (e) => {
    e.preventDefault();
    agregarElemento({ 
      nombre, 
      comida, 
      valorComida, 
     
       });

       setNombre('');
       setComida('');
       setValorComida('');
  }
  
  

  return (
    <>
    
     <form  className='formulario'>
      <label className='label-container'>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Ingrese nombre'/>
      </label>
      <label className='label-container'>
        Comida:
        <input type="text" value={comida} onChange={(e) => setComida(e.target.value)} placeholder='ingrese plato selecc'/>
      </label>
      <label className='label-container'>
        Valor de comida:
        <input type="number" value={valorComida} onChange={(e) => setValorComida(e.target.value)} placeholder='ingrese vaor de plato'/>
      </label>
      {
        modoEdicion ? (
          <button onClick={(e ) => {edicionFinal(e)} } type="submit" className='my-button_agregar'>editar</button>
        ) : (
          <button onClick={(e ) => {botonAgrgar(e)} } type="submit" className='my-button_agregar'>agregar</button>
        )
      }
     
      
    </form>

    <table className='styled-table'>
        <thead>
          <tr>
             <th>Nº</th>
            <th>Nombre</th>
            <th>Plato</th>
            <th>Valor/plato</th>
            <th>Act.</th>
          </tr>
        </thead>

        <tbody>
            {elementos.map((elem, index) => (
                <tr key={index} >
                  <td >{`${index + 1}`}.-</td> 
                  <td>{`${elem.nombre}`}</td>
                  <td>{`${elem.comida}`}</td>
                  <td>$ {`${elem.valorComida}`}</td>
                   
                   
                  <td>
                  <button
              onClick={() => eliminarElemento(index)}
              className="btn btn-danger mr-2"
            >
              Eliminar
            </button>
            <button
              onClick={() => primeraEdicon(index)}
              className="btn btn-secondary"
            >
              Editar
            </button>
                  
                  </td>  
                </tr>
              ))}
            </tbody>
       
       
        
      </table>
    </>
   
  );
};

export default Formulario;