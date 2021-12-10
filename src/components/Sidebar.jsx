
import React from 'react'
import ImagenLogo from './ImagenLogo'
import '../styles/sidebar.scss'
import { Link } from 'react-router-dom'



const Sidebar = () => {
    return (
        <div className="contenedor" >
            <ImagenLogo/>
            <nav>
                <ul >
                   
                    <li>
                        <Link to="/usuario/Index">
                            <button className="boton">Usuarios</button>
                        </Link>
                    </li>
                   
                    
                </ul>
            </nav>
            <button className="cerrar">Cerrar Sesión</button>
            
        </div>
    )
}

export default Sidebar
