import React from "react";
import { useState } from "react";

function Lista ({tarea, actualizarEditarTarea, eliminarTarea}) {
    const [editando, setEditando] = useState(false);
   // const [estaCompletado, setEstaCompletado] = useState(false);

    function ModoEdicionActivado () {
        const [capturarCampo, setCapturarCampo] = useState(tarea.tarea);

        const handleChange = (e) => {
            const text = e.target.value;
            setCapturarCampo(text);
        }

        function handleClick(e) {
            e.preventDefault()

            actualizarEditarTarea({ // funcion para editar desde el input original. esta funcion esta ubicada en app.js
                id: tarea.id,
                tarea: capturarCampo,
                completado: false

                
            })
            setEditando(false)
        }       
            
                return (
                    <>
                        <input 
                        type="text" 
                        value={capturarCampo}
                        onChange={handleChange}
                        />
                        
                        <button className="btn-editar" onClick={handleClick}>Guardar</button>
                        <button className="btn-Eliminar" onClick={()=> eliminarTarea(tarea.id)}>Eliminar</button>
                        
                    </>
                );
            
    }

    function ModoEdicionDesactivado () {
        return (
            <>
                <span 
                >{tarea.tarea}</span>
                <button className="btn btneditar" onClick={()=>setEditando(true)}>Editar</button>
                <button className="btn eliminar" onClick={()=> eliminarTarea(tarea.id)}>Eliminar</button>
            </>
        );
    }

    return (
        <>
        <div className="contenedor-tarea" id={tarea.id}>
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


/* SI ALGUNA VEZ NO ME DA FIACA COPIAR EL STYLE DEL TIPO PARA QUE FUNCIONE EL SUBRAYADO ESTO VA CON EL ESTADO ESTACOMPLETADO Y VA EN EL SPAN

<span 
                className={estaCompletado ? "todoTerea soanSubrayado" : "todoTareaNoSubrayado"}
                onClick={setEstaCompletado(!estaCompletado)}
                >{tarea.tarea}</span>

                */