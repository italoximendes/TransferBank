import React from "react";
import "./styleLayoutStatus.css";

const LayoutStatus = (props) => {
    return (
        <div>
            <span className="status-title">{props.children}</span>

            <div className="container-btn-voltar-dashboard">
                <a className="btn-voltar-dashboard" href="/dashboard">
                    VOLTAR AO DASHBOARD
                </a>
            </div>
        </div>
    );
};

export default LayoutStatus;
