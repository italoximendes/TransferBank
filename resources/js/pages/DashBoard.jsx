import React from "react";
import IndexLayout from "../components/LayoutComponents/IndexLayout";

const DashBoard = () => {
    return (
        <IndexLayout>
            <span className="login-form-title">Dash Board</span>
            
            <div className="container-login-form-btn">
                <button className="login-form-btn">DEPOSITO</button>
            </div>
            <div className="container-login-form-btn">
                <button className="login-form-btn">TRANSFERÊNCIA</button>
            </div>
    </IndexLayout>
    );
};

export default DashBoard;
