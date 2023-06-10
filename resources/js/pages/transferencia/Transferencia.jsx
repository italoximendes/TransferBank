import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import IndexLayout from "../../components/LayoutComponents/IndexLayout";
import "./styleTransferencia.css";

const Transferencia = () => {
    const navigate = useNavigate();

    const [remetente_id, setRemetente_id] = useState("");
    const [destinatario_id, setDestinatario_id] = useState("");
    const [valor, setValor] = useState("");

    const transfer = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("remetente_id", remetente_id);
        formData.append("destinatario_id", destinatario_id);
        formData.append("valor", valor);

        
        await axios.post('/api/transfers',  formData)
            .then(response=>{
                toast.success('Transferência realizada com sucesso!')
            })
            .catch(error =>{
                toast.error('Erro ao realizar a transfência.')
            })
        }  
    

    return (
        <IndexLayout>
            <span className="user-title">Tranferência</span>

            <div className="wrap-input">
                <input
                    className="input"
                    required
                    type="funsignedBigInteger"
                    value={remetente_id}
                    onChange={(event) => {
                        setRemetente_id(event.target.value);
                    }}
                />
                <span
                    className="focus-input"
                    data-placeholder="NÚMERO DA SUA CONTA"
                ></span>
            </div>

            <div className="wrap-input">
                <input
                    className="input"
                    required
                    type="unsignedBigInteger"
                    value={destinatario_id}
                    onChange={(event) => {
                        setDestinatario_id(event.target.value);
                    }}
                />
                <span
                    className="focus-input"
                    data-placeholder="CONTA DESTINÁTARIO"
                ></span>
            </div>

            <div className="wrap-input">
                <input
                    className="input"
                    required
                    type="decimal"
                    value={valor}
                    onChange={(event) => {
                        setValor(event.target.value);
                    }}
                />
                <span className="focus-input" data-placeholder="VALOR"></span>
            </div>

            <div className="container-btn-depositar-transferir">
                <button
                    className="btn-depositar-transferir"
                    onClick={(event) => transfer(event)}
                >
                    TRANSFERIR
                </button>
            </div>
            <div className="text-center">
                <a className="txt2" href="/dashboard">
                    Voltar ao Dashboard
                </a>
            </div>
        </IndexLayout>
    );
};

export default Transferencia;
