//TODO: Replace this copy of header w/ one for smaller screens w/ hamburger
import React from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby';
import { FaTimes } from 'react-icons/fa'

const SidebarContainer = styled.aside`
position: fixed;
z-index: 111;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const CloseIcon = styled(FaTimes)`
 color: #fff;
`

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

const SidebarWrapper = styled.div`
color: #fff;
`

const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
text-align: center;

@media screen and (max-width: 768px) {
  grid-auto-rows: 60px;
`

const SidebarLink = styled(Link)`
  display: block;
  align-items: center;
  jsutify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`

const Sidebar = ({toggleOpen, isOpen}) => {
  return(
   <SidebarContainer onClick={toggleOpen} isOpen={isOpen}>
     <Icon onClick={toggleOpen}>
       <CloseIcon />
     </Icon>
     <SidebarWrapper>
       <SidebarMenu>
         <SidebarLink onClick={toggleOpen} to='/' smooth={true} duration={700} delay={300} spy={true} exact={true}>
           Home
         </SidebarLink>
         <SidebarLink onClick={toggleOpen} to='/about/' smooth={true} duration={700} delay={300} spy={true} exact={true}>
           About
         </SidebarLink>
         <SidebarLink onClick={toggleOpen} to='/blog/'>
           Blog
         </SidebarLink>
         <SidebarLink onClick={toggleOpen} to='/projects/' smooth={true} duration={700} delay={300} spy={true} exact={true}>
           Projects
         </SidebarLink>
       </SidebarMenu>
     </SidebarWrapper>
   </SidebarContainer>
  )
}

export default Sidebar;

