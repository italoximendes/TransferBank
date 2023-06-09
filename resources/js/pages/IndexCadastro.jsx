import React from "react";
import IndexLayout from "../components/LayoutComponents/IndexLayout";

const IndexCadastro = () => {
    return (
        <IndexLayout>
            <form className="login-form">
                <span className="login-form-title">Cadastrar</span>

                <div className="wrap-input">
                    <input className="input" />
                    <span
                        className="focus-input"
                        data-placeholder="NOME COMPLETO"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" />
                    <span
                        className="focus-input"
                        data-placeholder="EMAIL"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" />
                    <span className="focus-input" data-placeholder="CPF"></span>
                </div>

                <div className="wrap-input">
                    <input className="input" />
                    <span
                        className="focus-input"
                        data-placeholder="CNPJ"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" />
                    <span
                        className="focus-input"
                        data-placeholder="SALDO"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" />
                    <span
                        className="focus-input"
                        data-placeholder="SENHA"
                    ></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Cadastrar</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Já possui conta? </span>
                    <a className="txt2" href="/login">
                        Entrar Agora
                    </a>
                </div>
            </form>
        </IndexLayout>
    );
};

export default IndexCadastro;
