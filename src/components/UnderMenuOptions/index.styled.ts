import styled from "styled-components";

export const MenuOptions = styled.div`
    height: 12%;
    width: 100vw;
    position: fixed;
    bottom: 0;
    position: relative;
    display: flex;
    justify-content: center;
    vertical-align: center;
    align-items: middle;
    :first-child{
        position: absolute;
        height: 10%;
        width: 100vw;
        -webkit-backdrop-filter: blur(30px);
        backdrop-filter: blur(30px);
        z-index: 5;
    }
`

export const IconOptionPlus = styled.div`
    display: flex;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
    svg {
        border: 3px solid ${(props) => props.theme['orange']};
        border-radius: 100%;
    }
`