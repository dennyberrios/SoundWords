import {
    useRef,
    useState
} from "react";
import Button from "../Button";
import TextInputField from "../TextInputField";
import {
    deepBlueColor,
    deepRedColor,
    pastelBlueColor,
    secondaryTextColor,
    softRedColor,
    successTextColor
} from "../UI/Variavel";
import {
    ButtonIcon,
    ContentTranscriptionArea
} from "./styles";
import { copyIcon } from "../../utils/FunctionCopy";
import { IoIosCopy } from 'react-icons/io';
import { FuncClear } from "../../utils/FunctionClear";

const TranscriptionArea = () => {

    const [textarea, setTextarea] = useState("");
    const [message, setMessage] = useState({});
    const textAreaRef = useRef(null);

    console.log(message.msg);


    return (
        <ContentTranscriptionArea>
            <div>
                <h1>SoundWords</h1>
                <p>Transcreva sua voz para texto facilmente. Edite ou copie seu texto quando terminar.</p>
            </div>
            <div className="box-TextInputField">
                <TextInputField
                    placeholder={"O texto transcrito aparecerá aqui..."}
                    value={textarea}
                    change={e => setTextarea(e)}
                    textAreaRef={textAreaRef}
                />
                <ButtonIcon
                    className="copy"
                    onClick={() => copyIcon(textAreaRef, setMessage)}
                    bg={"transparent"}
                    title="Copiar texto"
                ><IoIosCopy size={22} color={secondaryTextColor} /></ButtonIcon>
                <div className="box-span">
                    <span style={message.success ? { color: successTextColor } : { color: softRedColor }}>{message.msg}</span>
                </div>
            </div>
            <div className="buttons">
                <Button bg={pastelBlueColor} bgHover={deepBlueColor}>Iníciar</Button>
                <Button bg={softRedColor} bgHover={deepRedColor}>Parar</Button>
                <Button onClick={() => FuncClear(textAreaRef)} bg={pastelBlueColor} bgHover={deepBlueColor}>Limpar</Button>
            </div>
            <div className="footer">
                <p>Projeto criado para transcrição de áudio para texto.</p>
            </div>
        </ContentTranscriptionArea>
    );
}

export default TranscriptionArea;