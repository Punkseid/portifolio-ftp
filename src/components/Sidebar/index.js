import React, {useState, useEffect} from 'react';
import ImgLogo from '../../image/ruan-logo.jpg'
import { animateScroll as scroll } from 'react-scroll';
import {
    SideBarContaiener,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideLogo,
    SideLogoImg,
    IconWrap,
    SideSocial
} from './SidebarElements';

import {AllRights} from '../Footer/FooterElements'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default ({isOpen, toggle}) => {

    const [scrollNav, setscrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setscrollNav(true)
        }else{
            setscrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <SideBarContaiener isOpen={isOpen} scrollNav={scrollNav}>
                <Icon onClick={toggle}>
                    <CloseIcon></CloseIcon>
                </Icon>

                    <SideLogo to='/' onClick={toggleHome}>
                        <SideLogoImg src={ImgLogo} />
                    </SideLogo>
                <SideBarWrapper>
                    <SideBarMenu>
                        <SideBarLink to='tecnologias' onClick={toggle}>
                            Tecnologias
                        </SideBarLink>

                        <SideBarLink to='project' onClick={toggle}>
                            Projetos
                        </SideBarLink>

                        <SideBarLink to='about' onClick={toggle}>
                            About
                        </SideBarLink>

                        <SideBarLink to='contatos' onClick={toggle}>
                            Contatos
                        </SideBarLink>
                    </SideBarMenu>
                </SideBarWrapper>
                
                <IconWrap>
                <AllRights>{'\u00a9'}Ruan Gabriel Punkseid</AllRights>
                        <SideSocial href="https://www.instagram.com/ruan_1707/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SideSocial>
                        <SideSocial href="https://www.linkedin.com/in/ruan-gabriel-102a0b228/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SideSocial>
                        <SideSocial href="https://github.com/Punkseid" target="_blank" aria-label="GitHub">
                            <FaGithub />
                        </SideSocial>
                    </IconWrap>
            </SideBarContaiener>
        </>
    )
}