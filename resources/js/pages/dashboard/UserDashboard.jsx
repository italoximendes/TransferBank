import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import IndexLayout from "../../components/LayoutComponents/IndexLayout";
import "./styleDashBoard.css";

const UserDashboard = () => {
    const [users, setUsers] = useState([]);
    const [conta, setConta] = useState([])

    const getUser = async () => {
        try {
            const id = conta
            const response = await axios.get(`/api/user/${id}`);
            const data = response.data;
            setUsers(data);

            console.log(data);
        } catch (error) {
            toast.error("Dados do usuário não encontrados");
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <IndexLayout>
            <div>
                <div>
                    <span className="user-title">DashBoard</span>
                    <div className="wrap-input">
                        <input
                            className="input"
                            required
                            type="unsignedBigInteger"
                            value={conta}
                            onChange={(event) => {
                                setConta(event.target.value);
                            }}
                        />

                        <span
                            className="focus-input"
                            data-placeholder="NÚMERO DA SUA CONTA"
                        ></span>
                    </div>
                    <div className="container-btn-depositar-transferir">
                        <button
                            className="btn-depositar-transferir"
                            onClick={(event) => getUser(event)}
                        >
                            CARREGAR DADOS
                        </button>
                    </div>
            
                    <div className="container-info-user">
                        <span>
                            CONTA: <strong className="set-user"> {users.id}</strong>
                        </span>
                        <span>
                            NOME:<strong className="set-user"> {users.name}</strong>
                        </span>          
                        <span>
                            CPF: <strong className="set-user"> {users.cpf}</strong>
                        </span>
                        <span>
                            CNPJ: <strong className="set-user"> {users.cnpj}</strong>
                        </span>
                        <span>
                            SALDO: <strong className="set-user"> {users.balance}</strong>
                        </span>
                    </div>

                    <div className="container-btn-depositar-transferir">
                        <a
                            className="btn-depositar-transferir"
                            href="/deposito"
                        >
                            DEPOSITAR
                        </a>
                        <a
                            className="btn-depositar-transferir"
                            href="transferencia/"
                        >
                            TRANSFERIR
                        </a>
                    </div>
                    <div className="text-center">
                        <a className="txt2" href="/">
                            Sair da Conta
                        </a>
                    </div>
                </div>
            </div>
        </IndexLayout>
    );
};

export default UserDashboard;
