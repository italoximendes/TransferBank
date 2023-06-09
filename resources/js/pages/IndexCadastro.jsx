import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
import IndexLayout from "../components/LayoutComponents/IndexLayout";
// import 'sweetalert2/react/sweetalert2.js'

const IndexCadastro = () => {

    // const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [CPF, setCPF] = useState("")
    const [CNPJ, setCNPJ] = useState("")
    const [balance, setBalance] = useState("")
    const [password, setPassword] =useState("")

    // const store = async (e) => {
    //     e.preventDefault()

    //     const formData = new FormData()

    //     formData.append('name', name)
    //     formData.append('email', email)
    //     formData.append('CPF', CPF)
    //     formData.append('CNPJ', CNPJ)
    //     formData.append('balance', balance)
    //     formData.append('password', password)

    //     await axios.post('/api/app_product/', FormData)
    //         .then(({data})=>{
    //             toast.fire({
    //                 icon:"success",
    //                 title:"Ussuario cadastrado com sucesso"
    //             })
    //         })
    //         .catch(({response})=>{

    //         })

    // }
    
    return (
        <IndexLayout>
            <form className="login-form">
                <span className="login-form-title">Cadastrar</span>

                <div className="wrap-input">
                    <input className="input" type="text" value={name} onChange={(event)=>{setName(event.target.value)}}/>
                    <span
                        className="focus-input"
                        data-placeholder="NOME COMPLETO"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                    <span
                        className="focus-input"
                        data-placeholder="EMAIL"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" type="string" value={CPF} onChange={(event)=>{setCPF(event.target.value)}}/>
                    <span className="focus-input" data-placeholder="CPF"></span>
                </div>

                <div className="wrap-input">
                    <input className="input" type="string" value={CNPJ} onChange={(event)=>{setCNPJ(event.target.value)}} />
                    <span
                        className="focus-input"
                        data-placeholder="CNPJ"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" type="float" value={balance} onChange={(event)=>{setBalance(event.target.value)}}/>
                    <span
                        className="focus-input"
                        data-placeholder="SALDO"
                    ></span>
                </div>

                <div className="wrap-input">
                    <input className="input" type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
                    <span
                        className="focus-input"
                        data-placeholder="SENHA"
                    ></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn" onClick={(event)=>store(event)}>Cadastrar</button>
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
