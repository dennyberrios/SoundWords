import Button from "../../components/Button";
import { Container } from "../../components/Container/styles";
import NoteCard from "../../components/NoteCard";
import { deepBlueColor, pastelBlueColor } from "../../components/UI/Variavel";
import { StyleNoteBoard } from "./styles";

const NoteBoard = () => {
    return (
        <Container>
            <StyleNoteBoard>
                <h1>Bloco de Notas</h1>
                <NoteCard />
                <div className="box__button-add">
                    <Button
                        bg={pastelBlueColor}
                        bgHover={deepBlueColor}
                    >
                        Adicionar Nota
                    </Button>
                </div>
            </StyleNoteBoard>
        </Container>
    );
}

export default NoteBoard;