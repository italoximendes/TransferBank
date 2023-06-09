import React from'react'
import {Routes, Route} from "react-router-dom"

import IndexCadastro from '../pages/IndexCadastro'
import IndexLogin from '../pages/IndexLogin'
import NotFound from '../components/NotFound'
import DashBoard from '../pages/dashboard/DashBoard'
import Deposito from '../pages/depositar/Deposito'
import Transferencia from '../pages/transferencia/Transferencia'
import StatusTransferencia from '../pages/transferencia/statusTransferencia/statusTransferencia'
import StatusDeposito from '../pages/depositar/statusDeposito/statusDeposito'

const Router = () => {
    return(
        <div>
            <Routes>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/login" element={<IndexLogin/>}/>
                <Route path="/cadastro" element={<IndexCadastro/>}/>
                <Route path="/dashboard" element={<DashBoard/>}/> 
                <Route path="/deposito" element={<Deposito/>}/>  
                <Route path="/transferencia" element={<Transferencia/>}/> 
                <Route path="/transferencia/status" element={<StatusTransferencia/>}/>
                <Route path="/deposito/status" element={<StatusDeposito/>}/> 
            </Routes>
        </div>
    )
}

export default Router