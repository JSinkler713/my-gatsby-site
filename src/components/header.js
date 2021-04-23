import React from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby';


const NavLink = styled(Link)`
  color: white;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #01bf71;
  /*color: #01bf71;*/
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      background: black; 
      color: white;
      position: sticky;
      height: 80px;
      margin-top: -80px;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 2rem;
      z-index: 2;
      @media screen and (max-width: 565px) {
        /* going to need to show a hamburger menu */
        display: none;
      }
    `}
  >
    <NavLink fontWeight='bold' to='/'>Jsinkler Dev</NavLink>
    {/* site name */}
    {/* nav */}
    <nav css={css`display: flex; gap:30px; margin-top: 0;`}>
      <NavLink to='/' activeClassName='current-page'>Home</NavLink>
      <NavLink to='/about/' activeClassName='current-page'>About</NavLink>
      <NavLink to='/blog/' activeClassName='current-page'>Blog</NavLink>
      <NavLink to='/projects/' activeClassName='current-page'>Projects</NavLink>
    </nav>
  </header>
)

export default Header;
