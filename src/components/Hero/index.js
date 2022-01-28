import React from 'react';
import fotoPerfil from '../../image/fotoPerfil.png'
import HeroBgImage from '../../image/bgher.jpg'
import {
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroWrap,
    HeroContent,
    HeroText,
    HeroImgWrap,
    HeroImg,
    HeroH1,
    HeroP
} from './HeroSectionElements'

export default () => {
    return (
    <>
        <HeroContainer>
            <HeroBg>
                <ImgBg src={HeroBgImage}/>
            </HeroBg>
            <HeroWrap>
                <HeroContent>
                    <HeroText>
                        <HeroH1>Front-end Developer</HeroH1>
                        <HeroP> Sempre em busca de conhecimento para melhorar o meu desempenho na sua satisfação!</HeroP>
                    </HeroText>
                    <HeroImgWrap>
                        <HeroImg src={fotoPerfil}/>
                    </HeroImgWrap>
                </HeroContent>
            </HeroWrap>
        </HeroContainer>
        
    </>
    )
}