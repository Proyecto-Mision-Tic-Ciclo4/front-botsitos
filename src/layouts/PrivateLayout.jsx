import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router';
import React from 'react';
import '../styles/privatelayout.scss'

const PrivateLayout = () => {
  return (
    <div className='contenedorP'>
      <Sidebar />
      <div className='posicion'>
        <div className='cuerpo'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;