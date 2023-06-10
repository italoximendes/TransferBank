import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import IndexLayout from "../../components/LayoutComponents/IndexLayout";
import "./styleDashBoard.css";

const UserDashboard = ({ match }) => {   

        const [user, setUser] = useState(null);
        const navigate = useNavigate();

        useEffect(() => {
            const fetchUser = async () => {
              try {
                const response = await axios.get(`/api/users/${match.params.id}`); 
                setUser(response.data);
              } catch (error) {
                console.error(error);
                navigate(''); 
              }
            };
        
            fetchUser();
        }, [match.params.id]);

        if(!user){
            toast.error('Usuario não encontrado')
        }


        return (
            <IndexLayout>
                <span className="user-title">DashBoard</span>

                <div className="container-info-user">
                    
                         <span>Conta: {user.id} </span>
                         <span>Nome Completo: </span>
                         <span>Saldo: </span>
             
                </div>

                <div className="container-btn-depositar-transferir">
                    <a className="btn-depositar-transferir" href="/deposito">
                        DEPOSITAR
                    </a>
                    <a className="btn-depositar-transferir" href="/transferencia">
                        TRANSFERIR
                    </a>
                </div>
                <div className="text-center">
                    <a className="txt2" href="/">
                        Sair da Conta
                    </a>
                </div>
            </IndexLayout>
    
        );

};

export default UserDashboard;
