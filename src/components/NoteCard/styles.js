import styled from "styled-components";
import { 
    containerBackgroundColor,
    lightGrayBorderColor,
    shadowBackgroundColor,
    textareaBackgroundColor      
} from "../UI/Variavel";
import TextInputField from "../TextInputField";
import Button from "../Button";

export const StyleNoteCard = styled.form `
    background-color: ${textareaBackgroundColor};
    border: 1px solid ${lightGrayBorderColor};
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 6px ${shadowBackgroundColor};

    margin: 15px 0;

    display: flex;
    flex-direction: column;

    p {
        padding: 0;
        margin: 0;
        font-size: 0.9rem;
        margin-bottom: 8px;
    }

    p > span {
        padding: 0 5px;
    }

    .box__button {
        display: flex;
        gap: 10px;
        margin: 10px 0;
    }

    @media (max-width: 640px) {
        .box__button {
            flex-direction: column;
        }
    }
`;

export const TextInputFieldCard = styled(TextInputField)`
    height: 100px;
    background-color: ${containerBackgroundColor};
`;

export const ButtonNote = styled(Button)`
    padding: 8px 20px;
`;