import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { toggle } from "@src/store/redux/slice/burger";
import { BurgerLine } from "@src/store/styled/styleComponents";

import { getBurgerState } from "@src/store/redux";

const LineClose = styled(BurgerLine)`
  stroke-width: 0.393rem;
`;

const Line6 = styled(BurgerLine)`
  transform: ${props => (props.isAciveBurger ? "translateX(-18px) translateY(3px) rotate(-45deg) scale(0.7)" : "none")};
`;
const Line5 = styled(BurgerLine)`
  transform: ${props => (props.isAciveBurger ? "translateX(18px) translateY(3px) rotate(45deg) scale(0.7)" : "none")};
`;
const Line4 = styled(BurgerLine)`
  transform: ${props => (props.isAciveBurger ? "translateY(0px) rotate(-45deg) scale(0.7)" : "none")};
`;
const Line3 = styled(BurgerLine)`
  transform: ${props => (props.isAciveBurger ? "translateY(0px) rotate(45deg) scale(0.7)" : "none")};
`;
const Line2 = styled(BurgerLine)`
  transform: ${props => (props.isAciveBurger ? "translateX(-18px) translateY(-3px) rotate(45deg) scale(0.7)" : "none")};
`;
const Line1 = styled(BurgerLine)`
  transform: ${props => (props.isAciveBurger ? "translateX(18px) translateY(-3px) rotate(-45deg) scale(0.7)" : "none")};
`;

const IconClose = styled.svg`
  transform: ${props => (props.isAciveBurger ? "scale(1)" : "scale(0)")};
  transition: transform 400ms;
  width: 45px;
  height: 45px;
`;

const IconLine = styled.svg`
  cursor: pointer;
  position: absolute;
  display: block;
  border-radius: 50%;
  width: 45px;
  height: 45px;
`;

const Burger = () => {
  const dispatch = useDispatch();

  const { toggle: isAciveBurger } = useSelector(getBurgerState);

  const themeColor = useContext(ThemeContext).colors.surface;
  const burgerShadow = `0 0 0 100vw ${themeColor}, 0 0 0 100vh ${themeColor}`;

  return (
    <>
      <Burger.Burger shadow={burgerShadow} isAciveBurger={isAciveBurger} onClick={() => dispatch(toggle())}>
        <IconLine version="1.1" viewBox="0 0 100 100">
          <Line1 isAciveBurger={isAciveBurger} d="M 50,35 H 30" />
          <Line2 isAciveBurger={isAciveBurger} d="M 50,35 H 70" />
          <Line3 isAciveBurger={isAciveBurger} d="M 50,50 H 30" />
          <Line4 isAciveBurger={isAciveBurger} d="M 50,50 H 70" />
          <Line5 isAciveBurger={isAciveBurger} d="M 50,65 H 30" />
          <Line6 isAciveBurger={isAciveBurger} d="M 50,65 H 70" />
        </IconLine>
        <IconClose isAciveBurger={isAciveBurger} version="1.1" viewBox="0 0 100 100">
          <LineClose d="M 34,32 L 66,68" />
          <LineClose d="M 66,32 L 34,68" />
        </IconClose>
      </Burger.Burger>
    </>
  );
};

Burger.Burger = styled.div`
  display: none;

  @media ${props => props.theme.desktopFirst.tablet} {
    box-shadow: ${props => (props.isAciveBurger ? props.shadow : "none")};
    border-radius: ${props => (props.isAciveBurger ? "50% 50% 50% 50%" : "0")};

    position: fixed;
    right: 0;
    transform: translate(-15%, 0);
    transition: box-shadow 0.2s, border-radius 0.2s;
    cursor: pointer;
    display: block;
    width: 45px;
    height: 45px;
  }
`;

export { Burger };
