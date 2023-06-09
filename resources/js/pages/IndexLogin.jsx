import React from "react";
import IndexLayout from "../components/LayoutComponents/IndexLayout";

const IndexLogin = () => {
    return (
        <IndexLayout>
            <form className="login-form">
                <span className="login-form-title">Entrar Agora</span>

                <div className="wrap-input">
                    <input className="input" type="email" />
                    <span
                        className="focus-input"
                        data-placeholder="EMAIL"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" type="password" />
                    <span
                        className="focus-input"
                        data-placeholder="SENHA"
                    ></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Entrar</button>
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
