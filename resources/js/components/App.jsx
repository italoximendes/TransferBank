import React from 'react'
import Router from '../router/Router'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

const App = () =>{
    return (
        <div>
             <div>
                <Router/>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default App