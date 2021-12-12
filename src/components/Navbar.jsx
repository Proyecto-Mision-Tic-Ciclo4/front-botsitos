import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../media/Logo.png'



const Navar = () => {
    return (
        <div>
           <nav className='flex flex-row justify-between ml-10 mr-10  mt-5'> 
                         
               <img src={Logo} alt="logo equipo" width="35" heigth="35"/>
               <a  href="https://www.instagram.com/juandiego1628/"><span className="text-indigo-900 hover:text-purple-400 text-2xl" to='/contacto'>Acerca de nosotros</span></a>
               <Link className="text-indigo-900 hover:text-purple-400 text-2xl" to='/contacto'>
                   <span>Contacto</span>
               </Link>
               <Link className="text-indigo-900 hover:text-purple-400 text-2xl" to='/contacto'>
                   <span>Help</span>
               </Link>    
               
               
           </nav>
        </div>
    )
}

export default Navar