import { createGlobalStyle } from 'styled-components';
import { 
    lightBackgroundColor,
    secondaryTextColor
} from '../Variavel';
import { primaryFont } from '../Font';

export const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        list-style: none;
        text-decoration: none;

        font-family: ${primaryFont};
        color: ${secondaryTextColor};

        background-color: ${lightBackgroundColor};
    }
`;