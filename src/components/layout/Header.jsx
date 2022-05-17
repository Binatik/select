import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Container } from "@src/store/styled/styleComponents";

import { Burger } from "@cmp/UI/Burger";

const Link = styled(NavLink)`
  margin: 0 15px 0 0;
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};

  ${props => props.theme.fontStyle.links};

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

const Header = ({ ...props }) => {
  return (
    <>
      <Header.Header>
        <Container>
          <Link {...props} to="/">
            Главная
          </Link>
          <Link {...props} to="started">
            Дополнительная
          </Link>
          <Burger />
        </Container>
      </Header.Header>
    </>
  );
};

Header.Header = styled.header`
  padding: 30px 0;
  background-color:  ${props => props.theme.colors.background};
`;

export { Header };
