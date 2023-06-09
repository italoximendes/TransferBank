import React from "react";
import IndexLayout from "../../components/LayoutComponents/IndexLayout";
import './styleDashBoard.css'

const DashBoard = () => {
    return (
        <IndexLayout>
            <span className="user-title">DashBoard</span>

            <div className="container-info-user">
                <span>Conta:</span>
                <span>Nome Completo:</span>
                <span>Saldo:</span>

            </div>
            
            <div className="container-btn-depositar-transferir">
                <button className="btn-depositar-transferir">DEPOSITAR</button>
                <button className="btn-depositar-transferir">TRANSFERIR</button>
            </div>
         
        </IndexLayout>
    );
};

export default DashBoard;
