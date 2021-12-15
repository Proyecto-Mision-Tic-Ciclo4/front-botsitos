import React from 'react'
import Logo from '../media/Logo1.jpg'
import '../styles/imagen.scss'

const ImagenLogo = () => {
    return (
        <div className='forma'>
            <img src={Logo} alt="Logo de el equipo" with="250" height="200"/>
        </div>
    )
}

export default ImagenLogo
