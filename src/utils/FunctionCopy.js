export function copyIcon(textRef, setMessage) {
    if (textRef?.current) {
        textRef.current.focus();
        textRef.current.select();
        navigator.clipboard
        .writeText(textRef.current.value)
        .then(() => {
            if (textRef.current.value) {
                setMessage({msg:"Texto copiado com sucesso!", success: true});
            } else {
                setMessage({msg:"O campo está vazio. Não há texto para copiar.", success: false});
            }
        })
        .catch((err) => {
            setMessage({msg:"Falha ao copiar o texto.", success: false});
            console.error("Erro ao copiar: ", err);
        });
    }
};