import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navar.scss'
import Imagen from '../media/images.jpg'


const Navar = () => {
    return (
        <div>
           <nav className= "navbar"> 
                         
           <div>
                <img src={Imagen} alt="Logo de el equipo" with="30" height="30" />
            </div>
               <a  className="text"  href="https://www.instagram.com/juandiego1628/">Acerca de nosotros</a>
               <Link className="text" to='/contacto'>
                   <span>Contacto</span>
               </Link>
               <Link className="text" to='/contacto'>
                   <span>Contacto</span>
               </Link>    
               
               
           </nav>
        </div>
    )
}

export default Navar
