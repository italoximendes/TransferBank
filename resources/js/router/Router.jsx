import React from'react'
import {Routes, Route} from "react-router-dom"

import IndexCadastro from '../pages/IndexCadastro'
import UserDashboard from '../pages/dashboard/UserDashboard'
import Deposito from '../pages/depositar/Deposito'
import Transferencia from '../pages/transferencia/Transferencia'
import NotFound from '../pages/Notfound.'

const Router = () => {
    return(
        <div>
            <Routes>
                <Route path="/*"  element={<NotFound/>}/>
                <Route path="/" element={<IndexCadastro/>}/>
                <Route path='/dashboard' element={<UserDashboard/>}/> 
                <Route path="/deposito" element={<Deposito/>}/>  
                <Route path="/transferencia" element={<Transferencia/>}/> 
            </Routes>
        </div>
    )
}

export default Router