import React from "react";
import "../stylesheets/TareaFormulario.css";

function TareaFormulario(props){
    return(
        <form className="tarea-formulario">
        <input
            type="text"
            placeholder="Escribe una tarea..."
            value={props.tarea}
            name="tarea"
            className="tarea-input"
            onChange={props.handleTarea}
        />
        <button className="tarea-boton" onClick={props.agregarTarea}>
            Agregar Tarea
        </button>
        </form>
    )
}

export default TareaFormulario;