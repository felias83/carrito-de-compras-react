import { useState } from 'react'
import '../styles/card.css'


export const Card = ({ imagen, titulo, descripcion, precio,handleAgregar, handleQuitar,handleAumentar,handleDisminuir }) => {
    
    const [added, setAdded] = useState(false)

    const Agregar=()=>{
        handleAgregar()
        setAdded(true)

    }

    const Quitar=()=>{
        handleQuitar()
        setAdded(false)
    }


    return (
        <div className='tarjeta'>
            <img src={imagen} alt={titulo} className='tarjeta-imagen' />
            <div className='tarjeta-contenido'>
                <h3 className='tarjeta-titulo'>{titulo}</h3>
                <p className='tarjeta-descripcion'>{descripcion}</p>
                <p className='tarjeta-precio'>{precio}</p>
              
                {added
                    ? <button 
                    type='button' 
                    className='boton-quitar'
                    onClick={Quitar}
                    >
                        Quitar del carrito
                      </button>
                    : <button 
                    type='button' 
                    className='boton-agregar'
                    onClick={Agregar}
                    >
                        Agregar Carrito
                      </button>
                }

            </div>
        </div>
    )
}