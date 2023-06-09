import React from "react";
import IndexLayout from "../../components/LayoutComponents/IndexLayout";
import "./styleTransferencia.css";

const Transferencia = () => {
    return (
        <IndexLayout>
            <span className="user-title">Tranferência</span>

            <div className="wrap-input">
                <input
                    className="input"
                    // type="funsignedBigInteger"
                    // value={remetente_id}
                    // onChange={(event) => {
                    //     setBalance(event.target.value);
                    // }}
                />
                <span
                    className="focus-input"
                    data-placeholder="SUA CONTA"
                ></span>
            </div>

            <div className="wrap-input">
                <input
                    className="input"
                    // type="unsignedBigInteger"
                    // value={destinatario_id}
                    // onChange={(event) => {
                    //     setBalance(event.target.value);
                    // }}
                />
                <span
                    className="focus-input"
                    data-placeholder="CONTA DESTINÁTARIO"
                ></span>
            </div>

            <div className="wrap-input">
                <input
                    className="input"
                    // type="decimal"
                    // value={valor}
                    // onChange={(event) => {
                    //     setBalance(event.target.value);
                    // }}
                />
                <span className="focus-input" data-placeholder="VALOR"></span>
            </div>

            <div className="container-btn-depositar-transferir">
                <button className="btn-depositar-transferir">DEPOSITAR</button>
            </div>
        </IndexLayout>
    );
};

export default Transferencia;
