// src\hooks\useMensagem.js

import './style.css'

function MensagemFeedBack({mensagem, tipo, visivel, onclose}){
    if(!visivel){
        return null
    }

    return(
        <div
            id='mensagem'
            className={`Mensagem ${tipo} visivel`}
            onClick={onclose}
        >
            {mensagem}
            </div>
    )
}

export default mensagemFeedBack