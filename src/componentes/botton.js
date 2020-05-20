import React from "react"

export default function Button({ handleClick, text, classes }) {
    /*recibe la funcion, el texto del boton y las classes de css que se le quieran añadir*/ 
    return (
        <button 
            className={"btn text-center"+classes }
            onClick={(event)=>{handleClick(event)}}>
              {text}
        </button>
    )
}