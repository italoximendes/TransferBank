import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import IndexLayout from "../components/LayoutComponents/IndexLayout";
import axios from "axios";

const IndexCadastro = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCPF] = useState("")
    const [cnpj, setCNPJ] = useState("")
    const [balance, setBalance] = useState("")
    const [password, setPassword] =useState("")

    const store = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('name', name)
        formData.append('email', email)
        formData.append('cpf', cpf)
        formData.append('cnpj', cnpj)
        formData.append('balance', balance)
        formData.append('password', password)

        await axios.post('/api/users',  formData)
        .then(response=>{
            toast.success('Cadastro realizado com sucesso!')
        })
        .catch(error =>{
            toast.error('Verifique se todos os campos estão preenchidos e tente novamente!')
        })
      

    }
    
    return (
        
        <IndexLayout>
            <form className="login-form">
                <span className="login-form-title">Cadastro</span>

                <div className="wrap-input">
                    <input className="input" required type="text" value={name} onChange={(event)=>{setName(event.target.value)}}/>
                    <span
                        className="focus-input"
                        data-placeholder="NOME COMPLETO"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" required type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                    <span
                        className="focus-input"
                        data-placeholder="EMAIL"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" required type="string" value={cpf} onChange={(event)=>{setCPF(event.target.value)}}/>
                    <span className="focus-input" data-placeholder="CPF"></span>
                </div>

                <div className="wrap-input">
                    <input className="input" required type="string" value={cnpj} onChange={(event)=>{setCNPJ(event.target.value)}} />
                    <span
                        className="focus-input"
                        data-placeholder="CNPJ"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" required type="float" value={balance} onChange={(event)=>{setBalance(event.target.value)}}/>
                    <span
                        className="focus-input"
                        data-placeholder="SALDO"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" required type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
                    <span
                        className="focus-input"
                        data-placeholder="SENHA"
                    ></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn" onClick={(event)=>store(event)}>Cadastrar</button>
                </div>

            </form>
            <div className="text-center">
                <a className="txt2" href="/dashboard">
                   Ir para o Dashboard
                </a>
            </div>
        </IndexLayout>
    );
};

export default IndexCadastro;
