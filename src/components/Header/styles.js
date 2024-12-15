import styled from "styled-components";
import { 
    containerBackgroundColor, 
    lightGrayBorderColor, 
    pastelBlueColor 
} from "../UI/Variavel";

export const StyleHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    background-color: ${pastelBlueColor};
    color: ${containerBackgroundColor};

    span {
        font-size: 1.4rem;
        font-weight: 600;
    }
    
    nav > ul {
        display: flex;
        list-style: none;
        gap: 20px;
        
        font-size: 1.1rem;
    }

    nav > ul > li > a {
        text-decoration: none;
        color: ${containerBackgroundColor};
    }

    nav > ul > li > a:hover {
        color: ${lightGrayBorderColor};
    }
`;