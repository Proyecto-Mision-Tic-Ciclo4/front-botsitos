import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navar.scss'


const Navar = () => {
    return (
        <div>
           <nav className= "navbar"> 
                         
               <Link to="/admin" className="text">
                   <span>Inicio</span>
               </Link>
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
