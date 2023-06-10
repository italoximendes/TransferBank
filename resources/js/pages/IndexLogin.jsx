import React, {useState} from "react";
import {useNavigate}  from "react-router-dom";
import axios from "axios";
import IndexLayout from "../components/LayoutComponents/IndexLayout";

const IndexLogin = () => {


    const [id, setId] = useState('')
    const navigate = useNavigate('')

    const show = () => {
        axios.get(`/api/users/${id}`)
        .then(response=>{
            const userData = response.data; 
            setConteudo(userData);
            navigate(`/dashboard`);
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <IndexLayout>
            <form className="login-form">
                <span className="login-form-title">Entrar Agora</span>

                <div className="wrap-input">
                    <input
                        className="input"
                        required
                        type="text"
                        value={id}
                        onChange={(event) => {
                            setId(event.target.value);
                        }}
                    />
                    <span
                        className="focus-input"
                        data-placeholder="NÚMERO DA SUA CONTA"
                    ></span>
                </div>
                
                <div className="container-login-form-btn">
                    <button className="login-form-btn" onClick={(event)=>show(event)}>Entrar</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Não possui conta? </span>
                    <a className="txt2" href="/cadastro">
                        Cadastrar
                    </a>
                </div>
            </form>
        </IndexLayout>
    );
};

export default IndexLogin;
