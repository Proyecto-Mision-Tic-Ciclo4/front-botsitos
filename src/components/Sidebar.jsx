
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
                    <li>Perfil</li>
                    <li>
                        <Link to="/usuario/ventas">
                            <button className="boton">Proyectos</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/usuario/Index">
                            <button className="boton">Usuarios</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/usuario/usuarios">
                            <button className="boton">Avances</button>
                        </Link>
                    </li>
                    
                </ul>
            </nav>
            <button className="cerrar">Cerrar Sesión</button>
            
        </div>
    )
}

export default Sidebar
