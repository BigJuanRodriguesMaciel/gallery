import styled from "styled-components";

export const MenuOptions = styled.div`
    height: 12%;
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    vertical-align: center;
    align-items: middle;
    :nth-child(2){
        bottom: 0;
        height: 10%;
        width: 100vw;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        z-index: 5;
    }
`

export const IconOptionPlus = styled.div`
    display: flex;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
    svg {
        border-radius: 100%;
    }
`