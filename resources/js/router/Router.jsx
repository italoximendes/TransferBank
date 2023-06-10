import React from'react'
import {Routes, Route} from "react-router-dom"

import IndexCadastro from '../pages/IndexCadastro'
import IndexLogin from '../pages/IndexLogin'
import NotFound from '../components/NotFound'
import UserDashboard from '../pages/dashboard/UserDashboard'
import Deposito from '../pages/depositar/Deposito'
import Transferencia from '../pages/transferencia/Transferencia'

const Router = () => {
    return(
        <div>
            <Routes>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/" element={<IndexLogin/>}/>
                <Route path="/cadastro" element={<IndexCadastro/>}/>
                <Route path='/dashboard:id' element={<UserDashboard/>}/> 
                <Route path="/deposito" element={<Deposito/>}/>  
                <Route path="/transferencia" element={<Transferencia/>}/> 
            </Routes>
        </div>
    )
}

export default Router