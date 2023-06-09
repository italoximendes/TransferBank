import React from'react'
import {Routes, Route} from "react-router-dom"

import IndexCadastro from '../pages/IndexCadastro'
import IndexLogin from '../pages/IndexLogin'
import NotFound from '../components/NotFound'
import DashBoard from '../pages/DashBoard'

const Router = () => {
    return(
        <div>
            <Routes>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/login" element={<IndexLogin/>}/>
                <Route path="/cadastro" element={<IndexCadastro/>}/>
                <Route path="/dashboard" element={<DashBoard/>}/>         
            </Routes>
        </div>
    )
}

export default Router