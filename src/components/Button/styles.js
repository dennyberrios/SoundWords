import styled from "styled-components";
import { containerBackgroundColor } from "../UI/Variavel";

export const PrimaryButton = styled.button`
    background: ${function({$bg}) {return $bg}};
    color: ${containerBackgroundColor};
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;

    &:hover {
            background: ${function({$bgHover}) {return $bgHover}}; 
    }
`;