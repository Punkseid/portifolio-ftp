import styled from "styled-components";

export const TechContainer = styled.div`
    background: #000;
    display: flex;
    align-itms: center;
    justify-content: center;
    padding-top: 5rem;
`

export const TechWrap = styled.div`
    background: #202122;
    border: 2px solid #fd5000;
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

`
export const TechTitle = styled.div`
    width: 100%;
    text-align: left;
`

export const TecH2 = styled.h2`
    color: #f0f0e8;
    margin-bottom: 2.5rem;
`

export const IconsWrap = styled.div`
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const LogoHtml = styled.img`
    width: 80px;
    height: 80px;
    @media screen and (max-width: 450px){
        width: 65px;
        height: 65px; 
    }
`
export const LogoCss = styled.img`
    width: 80px;
    height: 80px;

    &:hover{
        transform: scale(1.12);
        transition: 2s ease-in-out;
    }
    @media screen and (max-width: 450px){
        width: 65px;
        height: 65px; 
    }
`
export const LogoJs = styled.img`
    width: 80px;
    height: 80px;
    @media screen and (max-width: 450px){
        width: 65px;
        height: 65px; 
    }
`
export const LogoReact = styled.img`
    width: 80px;
    height: 80px;
    transition-duration: 1s;
    animation-name: rotate;
    animation-timing-function: linear;
    animation-duration: 10s;
    animation-iteration-count: infinite;  
    @media screen and (max-width: 450px){
        width: 65px;
        height: 65px; 
    }  

    @keyframes rotate {
        from {
            transform: rotate(0);
        };
        to{
            transform : rotate(360deg);
        };
    }

`
