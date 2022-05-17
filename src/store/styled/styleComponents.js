import styled from "styled-components";

export const Container = styled.div`
  max-width: 1310px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const BurgerLine = styled.path`
  fill:  ${props => props.theme.colors.primary};
  transform-origin: 50%;
  transition: transform 400ms;
  stroke: ${props => props.theme.colors.primary};
  stroke-width: 2;
`;
