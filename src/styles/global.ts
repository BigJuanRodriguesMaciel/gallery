import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 100;
        font-family: 'Alumni Sans Pinstripe', sans-serif;
    }
    :focus {
        outline: 0;
    }
    body{
        background-color: ${(props) => props.theme['default-bg']};
        color: ${(props) => props.theme['white']}
    }
    body, input, textarea, button{
        font-weight: 400;
        font-size: 1rem
    }
    h2{
        font-size: 14px
    }
`