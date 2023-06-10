import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IndexLayout from "../../components/LayoutComponents/IndexLayout";
import "./styleDeposito.css";
import { toast } from "react-toastify";
import { error } from "laravel-mix/src/Log";

const Deposito = () => {

    const navigate = useNavigate()

    const [destinatario_id, setDestinatario_id] = useState("")
    const [valor, setValor] = useState("")

    const deposit = async (e) => {
        e.preventDefault()

        const  formData = new FormData()

        formData.append('destinatario_id',destinatario_id)
        formData.append('valor', valor)
        

        await axios.post('/api/deposits/',  formData)
            .then(response=>{
                toast.success('Deposito realizado com sucesso!')
            })
            .catch(errors =>{
                toast.error(errors)
            })
        }   

    return (
        <IndexLayout>
            <span className="user-title">Depósito</span>

            <div className="wrap-input">
                <input
                    className="input" required
                    type="unsignedBigInteger"
                    value={destinatario_id}
                    onChange={(event) => {
                        setDestinatario_id(event.target.value);
                    }}
                />
                <span
                    className="focus-input"
                    data-placeholder="NÚMERO DA SUA CONTA"
                ></span>
            </div>

            <div className="wrap-input">
                <input
                    className="input" required
                    type="decimal"
                    value={valor}
                    onChange={(event) => {
                        setValor(event.target.value);
                    }}
                />
                <span
                    className="focus-input"
                    data-placeholder="VALOR DEPÓSITO"
                ></span>
            </div>

            <div className="container-btn-depositar-transferir">
                <button className="btn-depositar-transferir" onClick={(event)=>deposit(event)}>DEPOSITAR</button>
            </div>
            <div className="text-center">
                <a className="txt2" href="/dashboard">
                    Voltar ao Dashboard
                </a>
            </div>
        </IndexLayout>
    );
};

export default Deposito;
