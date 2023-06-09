import React from "react";
import IndexLayout from "../../../components/LayoutComponents/IndexLayout";
import LayoutStatus from "../../../components/LayoutStatusTransferDepos/LayoutStatus";


const StatusTransferencia = () => {
    return (
        <IndexLayout>
            <LayoutStatus>
                <span className="status-title">Transferencia realizada com sucesso!</span>
            </LayoutStatus>
        </IndexLayout>
    );
};

export default StatusTransferencia;
