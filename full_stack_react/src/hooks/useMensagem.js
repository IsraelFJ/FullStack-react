// src\hooks\useMensagem.js

import { useState, useCallback } from "react";

function useMenssagem(){
    const [mensagem, setMensagem] = useState('')
    const [tipoMensagem, setTipomensagem] = useState('')
    const [visivel, setVisivel] = useState('')

    const exibirMensagem = useCallback((texto, tipo, tipo = 'sucesso') => {
        setMensagem(texto)
        setTipomensagem(tipo)
        setVisivel(true)
        setTimeout(() => setVisivel(false), 5000 )

    },[])

    const fecharMensagem = useCallback(()=>{
        setVisivel(false)
    },[])
    return{mensagem, tipoMensagem, visivel, exibirMensagem, fecharMensagem}
}

export default useMenssagem