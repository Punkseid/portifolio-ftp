import styled from "styled-components";

export const FooterContainer = styled.div`
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterWrap = styled.div`
    max-width: 1100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-top: 10rem;

    @media screen and (max-width: 450px){
        flex-direction: column;
        div:first-child{
            margin: 0;
            margin-bottom: 2rem;
        }
    }
`

export const AllRights = styled.div`
    color: #f0f0e8;
    font-size: 12px;
    margin-right: 2rem;
`

export const IconWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
`

export const FooterSocial = styled.a`
    color: #f0f0e8;
    font-size: 24px;
    
`