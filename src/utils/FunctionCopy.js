export function copyIcon(textRef, setMessage) {
    if (textRef?.current) {
        textRef.current.focus();
        textRef.current.select();
        navigator.clipboard
        .writeText(textRef.current.value)
        .then(() => {
            setMessage({msg:"Texto copiado com sucesso!", success: true});
        })
        .catch((err) => {
            setMessage({msg:"Falha ao copiar o texto.", success: false});
            console.error("Erro ao copiar: ", err);
        });
    }
};