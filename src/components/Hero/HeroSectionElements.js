import styled from "styled-components";


export const HeroContainer  = styled.div`
    background: #000;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 90%;
    overflow: hidden;

`
export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    
`

export const HeroWrap = styled.div`
    max-width: 1100px;
    width: 100%;
    display: flex;
    justify-content: center;
`
export const HeroContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media screen and (max-width: 920px){
        display: flex;
        flex-direction: column-reverse;
    }
`

export const HeroText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    :before{
        content: 'Ruan Gabriel';
        margin: 0 13.5rem 2rem 0;
        font-size: 0.7rem;
        color: #f0f0e8;
        font-weight: bold;
        opacity: 0.9;
        letter-spacing: 0.2rem;

        @media screen and (max-width: 920px){
            opacity: 1;
        }

        @media screen and (max-width: 450px){
            margin: 0 8rem 2rem 0;
        }
    }

`
export const HeroH1 = styled.h1`
    color: #f0f0e8;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    z-index: 1;
    @media screen and (max-width: 450px){
        font-size: 1.8rem;
        margin-top: 1rem;
    }
`

export const HeroP = styled.p`
    color: #f0f0e8;
    text-align: left;
    font-size: 1.2rem;
    opacity: 0.83;
    
    @media screen and (max-width: 450px){
        font-size: 0.82rem;
    }
`
export const HeroImgWrap = styled.div`
    color: #f0f0e8;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    
    @media screen and (max-width: 920px){
        position: relative;
        top: 30px;
        
    }
`

export const HeroImg = styled.img`
    overflow: hidden;
    z-index: 1;
    width: 300px;
    height: 300px;
`