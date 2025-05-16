// src\components\FormularioCadastro\index.js

import { useState } from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
import useMenssagem from "../../hooks/useMensagem";
import MensagemFeedBack from "../MensagensFeedBack";
import logo from '../../assets/images/logo.png'
import axios from "axios";

function FormularioCadastro(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()
    const { exibirMensagem, mensagem, tipoMensagem, visivel, fecharMensagem } = useMenssagem()

const cadastrarUsuario = async() => {
 try{
    const response = await axios.post('http://localhost:8080/usuarios', {nome, email, senha})
    exibirMensagem(response.data.mensagem || 'usuario cadasrtado com sucesso', 'sucesso')
    setNome()
    setEmail()
    setSenha()
 } catch (error){
    let erroMsg = 'Erro ao conectar ao servidor'
    if(error.response && error.data.mensagem){
        erroMsg = error.response.data.mensagem
        if(error.response.data.mensagem){
            erroMsg += '' + Object.values(error.response.data.erros).join(', ')
        }
    }
    exibirMensagem(erroMsg, 'erro')
 }

}

return (
    <div className="container">
        <img src={logo} alt="logo da empresa"/>
        <h2>Cadastro de Usuarios</h2>
        <form onSubmit={(e) => {e.preventDefault(); cadastrarUsuario()}}>
            <input
             type="text"
             id="nome"
             placeholder="Nome"
             value={nome}
             onChange={(e) => setNome(e.target.value)}
             required/>
        
            <input
             type="text"
             id="email"
             placeholder="E-Mail"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required/>
          
            <input
             type="password"
             id="senha"
             placeholder="Senha"
             value={senha}
             onChange={(e) => setSenha(e.target.value)}
             required/>      
      </form>
      <button onClick={() => navigate('/usuarios')} className="link-usuarios">
                Ver usuários cadastrados
            </button>

            <MensagemFeedBack
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onclose={fecharMensagem}
            />


    </div>
)

}

export default FormularioCadastro