import React from "react";




const Card = ({nombre, color}) => {
    return (
        <div>
            <h1>Hola {nombre}</h1>
            <p>Sabemos que tu color favorito es: {color}</p>
        </div>
    ) 
}


export default Card;