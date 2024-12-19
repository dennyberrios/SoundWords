import styled from "styled-components";
import {
    containerBackgroundColor,
    lightGrayBorderColor,
    pastelBlueColor,
    shadowBackgroundColor
} from "../../components/UI/Variavel";

export const StyleNoteBoard = styled.section`
    max-width: 900px;
    width: 100%;

    background-color: ${containerBackgroundColor};
    box-shadow: 0 2px 6px ${shadowBackgroundColor};
    border-radius: 8px;
    padding: 16px;
    border: 1px solid ${lightGrayBorderColor};

    h1 {
        text-align: center;
        color: ${pastelBlueColor};
        font-size: 2rem;
        margin: 0;
        margin-bottom: 20px;
    }

    .box__button-add { 
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 16px;
    };

    @media (max-width: 640px) {
        max-width: 290px;
        h1 {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 1024px) {
        width: 500px;

        h1 {
            font-size: 1.7rem;
        }
    }
`;