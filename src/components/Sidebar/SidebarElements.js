import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import {FaTimes} from 'react-icons/fa'

export const SideLogo = styled(LinkR)`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    padding: 1.5rem;
`

export const SideLogoImg = styled.img`
    max-width: 100%;
    width: 30px;
    height: 30px;
`

export const SideBarContaiener = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 1s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const CloseIcon = styled(FaTimes)`
    color: #f0f0e8;
`

export const SideBarWrapper = styled.div`
    color: #f0f0e8;
`

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color? #f0f0e8;
    cursor: pointer;

    &:hover{
        color: #fd5000;
        transition: 0.2s ease-in-out;
    }
`

export const IconWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SideSocial = styled.a`
    font-size: 20px;
    margin-left: 15px;
    color: #f0f0e8;
`