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