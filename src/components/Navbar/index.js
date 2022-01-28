import React from 'react';
import ImgLogo from '../../image/ruan-logo.jpg'
import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
     Nav,
     NavContainer,
     NavLogo,
     NavLogoImg,
     NavMobileIcon,
     NavMenu,
     NavItems,
     NavLinks
} from "./NavbarElements";
import {FaBars} from 'react-icons/fa'

export default ({toggle}) => {
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
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <NavLogoImg src={ImgLogo}/>
                    </NavLogo>
                    <NavMobileIcon onClick={toggle}>
                        <FaBars />
                    </NavMobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to='tecnologias' smooth={true}duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Tecnologias</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='project' smooth={true}duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Projetos</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='about' smooth={true}duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>About</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='contatos' smooth={true}duration={500}
                            spy={true}
                            offset={-80}>Social</NavLinks>
                        </NavItems>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}