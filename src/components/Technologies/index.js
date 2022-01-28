import React from 'react';
import IconHtml from '../../image/logo-html.png'
import IconCss from '../../image/logo-css.png'
import IconJs from '../../image/logo-js.png'
import IconReact from '../../image/logo-react.png'
import {
    TechContainer,
    TechWrap,
    TechTitle,
    TecH2,
    IconsWrap,
    LogoHtml,
    LogoCss,
    LogoJs,
    LogoReact,
} from './TechnologiesElements'


export default () => {
    return (
        <>
            <TechContainer id='tecnologias'>
                <TechWrap>
                    <TechTitle>
                        <TecH2>Tecnologias</TecH2>
                    </TechTitle>
                    <IconsWrap>
                        <LogoHtml src={IconHtml}/>
                        <LogoCss src={IconCss}/>
                        <LogoJs src={IconJs}/>
                        <LogoReact src={IconReact}/>
                    </IconsWrap>
                </TechWrap>
            </TechContainer>
        </>
    )
}