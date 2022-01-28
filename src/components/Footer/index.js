import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    AllRights,
    IconWrap,
    FooterSocial
} from './FooterElements'

import{
    FaInstagram,
    FaLinkedin,
    FaGithub
}
from 'react-icons/fa'
export default () => {
    return(
        <>
            <FooterContainer id='contatos'>
                <FooterWrap>
                    <AllRights>{'\u00a9'}Ruan Gabriel Punkseid</AllRights>
                    <IconWrap>
                        <FooterSocial href="https://www.instagram.com/ruan_1707/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </FooterSocial>
                        <FooterSocial href="https://www.linkedin.com/in/ruan-gabriel-102a0b228/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </FooterSocial>
                        <FooterSocial href="https://github.com/Punkseid" target="_blank" aria-label="GitHub">
                            <FaGithub />
                        </FooterSocial>
                    </IconWrap>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}