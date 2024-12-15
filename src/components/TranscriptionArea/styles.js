import styled from "styled-components";
import {
    containerBackgroundColor,
    containerBorderColor,
    pastelBlueColor,
    secondaryTextColor,
    shadowBackgroundColor,
    warmYellowColor
} from "../UI/Variavel";
import Button from "../Button";

export const ContentTranscriptionArea = styled.div`
    width: 700px;

    padding: 20px 30px;
    background-color: ${containerBackgroundColor};

    border: 1px solid ${containerBorderColor};
    border-radius: 12px;
    box-shadow: 0 4px 10px ${shadowBackgroundColor};
    text-align: center;

    h1 {
        color: ${pastelBlueColor};
        font-size: 2rem;
        margin: 0;
        margin-bottom: 16px;
    }

    p {
        font-size: 1rem;
        margin-bottom: 24px;
    }

    .box-TextInputField {
        position: relative;
    }

    .box-TextInputField > .box-span {
        font-size: 1rem;
        font-weight: 600;

        width: 100%;
        height: 20px;

        margin: 10px 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .buttons {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        gap: 15px;
    }

    .footer {
        margin-top: 20px;
        font-size: 0.9rem;
        color: ${secondaryTextColor};
    }

    @media (max-width: 640px) {
        max-width: 290px;

        .buttons {
            display: flex;
            flex-direction: column;
        }
    }

    @media (max-width: 1024px) {
        width: 500px;
    }
`;

export const ButtonIcon = styled(Button)`
    position: absolute;
    top: -8px;
    right: -12px;
    padding: 0;
    margin: 0;

    svg:hover {
        transition: .2s;
        fill: ${warmYellowColor};
        transform: scale(1.11);
    }
`;