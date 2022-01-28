import styled from "styled-components";

export const AboutContainer =  styled.div`
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10rem;
`
export const AboutH1  = styled.h2`
    color: #f0f0e8;
    margin-bottom: 3rem;
`

export const AboutWrap = styled.div`
    max-width: 1100px;
    width: 100%;
    padding: 1rem;
`

export const AboutItemsLeft = styled.div`
    background: ${({lightBg}) => (lightBg ? '#000' : '#202122')};
    border: 2px solid #fd5000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 5rem;
    div:last-child{
        margin-left: 3rem;
    }
`

export const AboutItemsRight = styled.div`
    background: ${({lightBg}) => (lightBg ? '#000' : '#202122')};
    border: 2px solid #fd5000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-bottom: 5rem;
    padding-left:10px;
    
    div:first-child{
        margin-right: 3rem;
        text-align: left;
    }
`

export const AboutImg = styled.img`
    color: #f0f0e8;
    width: 10rem;
    height: 8rem;
    opacity: 0.9;
    border: 1px solid #fd5000;

    @media screen and (max-width: 570px){
        width: 8rem;
        height: 4rem;
    }
`

export const AboutP = styled.div`
    color: #f0f0e8;
    width: 23rem;
    @media screen and (max-width: 570px){
        font-size: 0.8rem;
    }
`
 export const AboutSpan = styled.span`
    color: #fd5000;
    letter-spacing: 1px;
 `
