import styled from "styled-components";
import { 
    lightGrayBorderColor,
    primaryTextColor, 
    textareaBackgroundColor, 
    warmYellowColor
} from "../UI/Variavel";
import { primaryFont } from "../UI/Font";

export const Textarea = styled.textarea`
    width: calc(100% - 20px);
    height: 150px;
    padding: 12px;
    border: 1px solid ${lightGrayBorderColor};
    border-radius: 8px;
    font-size: 1rem;
    resize: none;
    background-color: ${textareaBackgroundColor};
    color: ${primaryTextColor};

    font-family: ${primaryFont};

    &:focus {
        border: 1px solid ${warmYellowColor};
        outline: 2px solid ${warmYellowColor};
    }
`;