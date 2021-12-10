import React from 'react';
import ReactLoading from 'react-loading';
import '../styles/Ediciones/editarUsuario.scss'

const ButtonLoading = ({ disabled, loading, text }) => {
  return (
    <button
      disabled={disabled}
      type='submit'
      className='botonCambio'
    >
      {loading ? <ReactLoading type='spin' height={30} width={30} /> : text}
    </button>
  );
};

export default ButtonLoading;