import {
    deepBlueColor,
    deepRedColor,
    pastelBlueColor,
    softRedColor
} from "../UI/Variavel";
import {
    ButtonNote,
    StyleNoteCard,
    TextInputFieldCard
} from "./styles";

const NoteCard = () => {
    return (
        <StyleNoteCard>
            <p>Criado em:<span>16/12/2024</span>às<span>00:35:57</span></p>
            <TextInputFieldCard
                placeholder={"Escreva sua nota..."}
            />
            <div className="box__button">
                <ButtonNote
                    bg={pastelBlueColor}
                    bgHover={deepBlueColor}
                >
                    Atualizar
                </ButtonNote>
                <ButtonNote
                    bg={softRedColor}
                    bgHover={deepRedColor}
                >
                    Excluir
                </ButtonNote>
            </div>
            
        </StyleNoteCard>
    );
}

export default NoteCard;