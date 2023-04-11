import React from "react";
import logoUrl from "../logo.svg"
import styled from "styled-components";
import {NavLink} from "react-router-dom";


const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #333;
  padding: 0.5rem;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0.5rem;

    gap: 1rem;

    li {
      a {
        color: #dedede;
      }

      a.active {
        color: #fff;
      }
    }
  }
`;

const Logo = styled.img`
    height: 3rem;
    transform: translateY(2px);
    margin-right: 1rem;
`;

export const MainMenu: React.FC = () => {
    return (
        <StyledNav>
            <NavLink to="/">
                <Logo src={logoUrl} alt="" />
            </NavLink>

            <ul>
                <li>
                    <NavLink to="/feed">Feed</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/signup">Register</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </StyledNav>
    )
}