import React from "react";
import IndexLayout from "../../components/LayoutComponents/IndexLayout";
import "./styleDeposito.css";

const Deposito = () => {
    return (
        <IndexLayout>
            <span className="user-title">Depósito</span>

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
                    data-placeholder="SUA CONTA"
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
                <span
                    className="focus-input"
                    data-placeholder="VALOR DEPÓSITO"
                ></span>
            </div>

            <div className="container-btn-depositar-transferir">
                <button className="btn-depositar-transferir">DEPOSITAR</button>
            </div>
        </IndexLayout>
    );
};

export default Deposito;
