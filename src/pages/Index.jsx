<<<<<<< HEAD
import React from 'react';
import Proyecto from "media/proyecto.png"
const Index = () => {
  return (
    <div>
      <h1 className='text-3xl text-center mt-10 mb-10 font-bold'>Gestión de Proyectos</h1>
      <div className='bg-indigo-400 rounded-full flex flex-row'>
        <img src={Proyecto} alt= "Imagen de proyecto"/>
        <ul className='ml-5 mt-5 text-2xl space-y-16'>
          <li >
            <i className='fas fa-check-circle mr-1'/>
            Edita tu Perfil</li>
          <li>
          <i className='fas fa-check-circle mr-1'/>
            Visualiza todos los proyectos disponibles</li>
          <li>
          <i className='fas fa-check-circle mr-1'/>
            Inscribete a un proyecto</li>
          <li>
          <i className='fas fa-check-circle mr-1'/>
            Gestiona los avances en tu proyecto</li>
        </ul>        
      </div>     
    </div>
  );
};

export default Index;
=======
import Navar from '../components/Navar';
import '../styles/Index.scss'
import Logo from '../media/Logo1.jpg'


function Index() {
    return(
        <div>
            <nav className="container">
               <Navar/>
                <button className="botonIndex">
                    <a className="textIndex" href="/usuario">Iniciar Sesión</a>
                </button> 
            </nav>
            <div className="center">
               <img   src={Logo} alt="logo" width="500" height="450" />
            </div>       
            
            
                        
        </div>
    )
}
export default Index;
>>>>>>> b79c91f64cb1afbc34ac041c5af078cd18f0342e
