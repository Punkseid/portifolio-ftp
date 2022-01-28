import styled from "styled-components";

export const WorkTgContainer = styled.div`
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const WorkTgWrap = styled.div`
    max-width: 1100px;
    width: 100%;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 5rem;

    &:hover{
        transform: scale(1.02);
        transition: 2s ease-in-out;
    }
`

export const WorkTgLink = styled.a`
    color: #f0f0e8;
    font-size: 2.5rem;
    cursor: pointer;

    &:hover{
        transition: 2s ease-in-out;
        text-decoration: underline #fd5000;  
    }

    @media screen and (max-width: 650px){
        font-size: 1.5rem;
    }
`