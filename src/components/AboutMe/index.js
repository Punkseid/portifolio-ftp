import React from 'react';
import FotoAboutPerfil from '../../image/fotoaboutme.png'
import LotrImg from '../../image/senhordosaneis.jpg'
import ThundeCatsImg from '../../image/thundercats.jpg'
import KaliLinux from '../../image/kalilinux.jpeg'
import {
    AboutContainer,
    AboutWrap,
    AboutItemsLeft,
    AboutItemsRight,
    AboutImg,
    AboutP,
    AboutSpan,
    AboutH1,
} from './AboutElements'

export default () => {
    return(
        <>
            <AboutContainer id='about'>
                <AboutWrap>
                    <AboutH1>About!</AboutH1>
                    <AboutItemsLeft>
                        <AboutImg src={FotoAboutPerfil}/>
                        <AboutP>Muito prazer, me chamo <AboutSpan>Ruan Gabriel</AboutSpan>, tenho 19 anos e sou <AboutSpan>desenvolvedor Front-end</AboutSpan>.</AboutP>
                    </AboutItemsLeft>

                    <AboutItemsRight>
                        <AboutP>Não trabalho como programador. Eu vivo como programador!</AboutP>
                        <AboutImg src={KaliLinux}/>
                    </AboutItemsRight>
                
                    <AboutItemsLeft>
                        <AboutImg src={ThundeCatsImg}/>
                        <AboutP>Poderia me descrever em apenas três palavras: <AboutSpan> sangue nos olhos </AboutSpan>.</AboutP>
                    </AboutItemsLeft>

                    <AboutItemsRight>
                        <AboutP>Sou um grande fã de <AboutSpan>the Witcher</AboutSpan> e do universo do <AboutSpan> O Senhor dos Anéis</AboutSpan>.</AboutP>
                        <AboutImg src={LotrImg}/>
                    </AboutItemsRight>
                </AboutWrap>
            </AboutContainer>
        </>
    )
}