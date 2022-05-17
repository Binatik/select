import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { getSelectValueState } from "@src/store/redux/index";

const Content = styled.span`
  margin: 0 0 0 30px;
`;

const Chip = () => {
  const { chip } = useSelector(getSelectValueState);

  return (
    <>
      <Chip.Container>
        <Content> {chip} </Content>
      </Chip.Container>
    </>
  );
};

Chip.Container = styled.div`
  margin: 0 0 30px 0;
  padding: 25px 0;
  background-color: ${props => props.theme.colors.surface};

  ${props => props.theme.fontStyle.title};
`;

export { Chip };
