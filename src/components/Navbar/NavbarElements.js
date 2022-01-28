import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.div`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px){
        transition: 1s all ease;
    }
`

export const NavContainer = styled.div`
    display: flex;
    max-width: 1100px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    
`

export const NavLogo = styled(LinkR)`
    max-width: 100%;
    width: 35px;
    height: 35px;
    overflow: hidden;
`

export const NavLogoImg = styled.img`
    max-width: 100%;
`

export const NavMobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        transform: translate(-100%, 60%)
        transition: 1.2s;
        font-size: 1.8rem;
        cursor: pointer;
        color: #f0f0e8;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: -22px;
    list-style: none;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItems = styled.li`
    padding: 0.5rem 0.5rem;
    overflow: hidden;
`

export const NavLinks = styled(LinkS)`
    color: #f0f0e8;
    padding: 0 0.5rem;
    cursor: pointer;
    text-decoration: none;
    height: 100%;
    &:hover{
        color: #fd5000;
        transition: 0.2s ease-in-out;
    }
    
    &.active{
        border-bottom: 3px solid #fd5000;
    }
`