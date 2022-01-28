import styled from "styled-components";

export const ProjectContainer = styled.div`
    padding-top: 8rem;
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
`
export const H1Wrap = styled.div`
    max-width: 1100px;
    width: 100%;
    align-items: left;
    margin-top: 5rem;
    padding: 1rem;
`

export const PojectH1 = styled.h2`
   color: #f0f0e8;
`

export const ProjectWrap = styled.div`
    margin-top: 3rem;
    max-width: 1100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`
export const ProjectContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 50px;
    overflow: hidden;

    @media screen and (max-width: 720px){
        display: block;
    }
`

export const ProjectItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20rem;
    overflow: hidden;

    @media screen and (max-width: 720px){
        margin-bottom: 0;
    }
`
export const ProjectName = styled.h3`
    color: #f0f0e8;
    margin-bottom: 3rem;
`
export const ImgWrap = styled.a`
    display:flex;
    flex-direction: column;
    align-items:center;
    max-width: 100%;
    color: #f0f0e8;
    text-decoration: none;
    cursor: pointer;
    transition: 1s ease-in-out;
    &:hover{
        transform: scale(1.01);
        transition: 2s ease-in-out;
    }

`

export const ProjectImg = styled.img`
    width: 400px;
    height: 400px;
    border: 1px solid #fd5000;
    margin-bottom: 5px;
    @media screen and (max-width: 550px){
        width: 250px;
        height: 250px;
    }
`

export const PWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 8rem;

    @media screen and (max-width: 720px){
        margin-top: 5rem;
        margin-bottom: 20rem;
    }
`

export const ProjectDescription = styled.p`
    color: #f0f0e8;
    margin-bottom: 1rem;
    
`