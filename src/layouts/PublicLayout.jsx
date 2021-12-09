import React from 'react'
import { Outlet } from 'react-router'

import '../styles/PublicLayout.scss'

const PublicLayout = () => {
    return (
        <div className="Nav">
           <Outlet/>            
       </div>
    )
}

export default PublicLayout
