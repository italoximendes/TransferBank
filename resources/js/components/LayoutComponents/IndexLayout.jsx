import React from 'react'
import './stylesLayout.css' 

const IndexLayout = (props) => {
    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    {props.children}
                </div>
            </div>      
        </div>        
    )
}

export default  IndexLayout