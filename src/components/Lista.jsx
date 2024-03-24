import React from "react";
import { useState } from "react";

function Lista ({nombre, comida, actualizarEditarTarea, eliminarTarea}) {
    const [editando, setEditando] = useState(false);
   // const [estaCompletado, setEstaCompletado] = useState(false);

    function ModoEdicionActivado () {
        const [capturarCampoNombre, setCapturarCampoNombre] = useState(nombre.nombre);
        const [capturarCampoComida, setCapturarCampoComida] = useState(nombre.comida);

        const handleChange = (e) => {
            const text = e.target.value;
            const text2 = e.target.comida;
            setCapturarCampoNombre(text);
            setCapturarCampoComida(text2);
        }

        function handleClick(e) {
            e.preventDefault()


            // funcion para editar desde el input original. esta funcion esta ubicada en app.js
            actualizarEditarTarea(
                
                { 
                id: nombre.id,
                nombre: capturarCampoNombre,
                comida: capturarCampoComida,
                
                },
               
            
            )
            setEditando(false)
        }       
            
                return (
                    <>
                        <input 
                        type="text" 
                        value={capturarCampoNombre}
                        onChange={handleChange}
                        />
                        <input 
                        type="text" 
                        value={capturarCampoComida}
                        onChange={handleChange}
                        />
                        
                        <button className="btn-editar" onClick={handleClick}>Guardar</button>
                        <button className="btn-Eliminar" onClick={()=> eliminarTarea(nombre.id)}>Eliminar</button>
                        
                    </>
                );
            
    }

    function ModoEdicionDesactivado () {
        return (
            <>
                <span 
                >{nombre.nombre}</span>
                <button className="btn btneditar" onClick={()=>setEditando(true)}>Editar</button>
                <button className="btn eliminar" onClick={()=> eliminarTarea(nombre.id)}>Eliminar</button>
            </>
        );
    }

    return (
        <>
        <div className="contenedor-tarea" id={nombre.id}>
            {
                editando ? 
                    <ModoEdicionActivado />
                 : 
                    <ModoEdicionDesactivado />
                
            }
        </div>
            
        </>
    )

} 

export default Lista;