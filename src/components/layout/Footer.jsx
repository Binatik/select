import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/styleComponents";

const Footer = () => {
  return (
    <>
      <Footer.Footer>
        <Container>
        </Container>
      </Footer.Footer>
    </>
  );
};

Footer.Footer = styled.footer`
  padding: 50px 0;
  background-color:  ${props => props.theme.colors.background};
`

export { Footer };
