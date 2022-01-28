import React from 'react';
import ImgQuiz from '../../image/img-quiz.png'
import ImgNetflix from '../../image/netflix.png'
import ProjectLogo from '../../image/logoimg.jpg'
import CyberSeid from '../../image/cyberseidlogo.jpg'
import {
    ProjectContainer,
    H1Wrap,
    PojectH1,
    ProjectWrap,
    ProjectContent,
    ProjectName,
    ProjectItems,
    ImgWrap,
    ProjectImg,
    ProjectDescription,
    PWrap,
    colorBg
} from './ProjectsElements'

export default () => {
    return (
        <>
            <ProjectContainer id='project'>
            <H1Wrap>
                        <PojectH1>Projetos escolhidos</PojectH1>
                    </H1Wrap>
                <ProjectWrap>
                    <ProjectContent>
                            <ProjectItems>
                                <ProjectName>Quiz com VanillaJS</ProjectName>
                                <ImgWrap>
                                    <ProjectImg src={ImgQuiz}/>
                                    <span>Clique para  jogar!</span>
                                </ImgWrap> 
                            </ProjectItems>

                            <PWrap>
                                 <ProjectDescription>
                                    Um mini-quiz sobre ciência e tecnologia muito divertido.
                                 </ProjectDescription>
                                 <ProjectDescription>
                                     A cada acerto você ganha 10 pontos, e no final você pode salvar a pontuação e competir contra os seus amigos.
                                 </ProjectDescription>
                                 <ProjectDescription>
                                    Este mini-game foi construido utilizando Arrays e suas propriedades, funções e também utilizando o JSON para armazenar os dados no browser.
                                 </ProjectDescription>
                            </PWrap>

                            <ProjectItems>
                                <ProjectName>Replica Netflix</ProjectName>
                                <ImgWrap>
                                    <ProjectImg src={ImgNetflix}/>
                                </ImgWrap> 
                            </ProjectItems>

                            <PWrap>
                                 <ProjectDescription>Explorando conceitos de layouts mais utilizados como o Grid Template e Flex Box.
                                 </ProjectDescription>
                                 <ProjectDescription>
                                     Utilizando Grid Template para posicionar os elementos em coluna com maior facilidade e praticidade. Flex Box utilizado para centralizar os elementos e deixá-los alinhados.
                                 </ProjectDescription>
                               
                            </PWrap>

                            <ProjectItems>
                                <ProjectName>Cyberseid</ProjectName>
                                <ImgWrap href='http://cyberseid.com.br/' target="_blank">
                                    <ProjectImg src={CyberSeid}/>
                                </ImgWrap> 
                            </ProjectItems>

                            <PWrap>
                                 <ProjectDescription>Meu Site!</ProjectDescription>
                                 <ProjectDescription>
                                 Posto artigos sobre assuntos relacionados a tecnologia.
                                 </ProjectDescription>
                                 <ProjectDescription>
                                 Aplicando as muitas e muitas horas de aprendizado em um projeto real. Para conferir, basta clicar na imagem!
                                 </ProjectDescription>
                            </PWrap>

                            <ProjectItems>
                                <ProjectName>Portfolio com React</ProjectName>
                                <ImgWrap>
                                    <ProjectImg src={ProjectLogo}/>
                                </ImgWrap> 
                            </ProjectItems>

                            <PWrap>
                                 <ProjectDescription>
                                     Esse portfolio foi constuído inteiramente com React!

                                 </ProjectDescription>
                                 <ProjectDescription>
                                    Customizando as proprias tags com a lib styled, reutilizando componentes, usando Routers v6.
                                 </ProjectDescription>
                            </PWrap>
                    </ProjectContent>
                </ProjectWrap>
            </ProjectContainer>
        </>
    )
}