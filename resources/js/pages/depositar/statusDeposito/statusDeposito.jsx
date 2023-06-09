import React from "react";
import IndexLayout from "../../../components/LayoutComponents/IndexLayout";
import LayoutStatus from "../../../components/LayoutStatusTransferDepos/LayoutStatus";


const StatusDeposito = () => {
    return (
        <IndexLayout>
            <LayoutStatus>
                <span className="status-title">Deposito realizado com sucesso!</span>
            </LayoutStatus>
        </IndexLayout>
    );
};

export default StatusDeposito;
