import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { getSelectValueState } from "@src/store/redux/index";

const Content = styled.span`
  margin: 0 15px 0 0;
  &:last-child {
    margin: 0;
  }
`;

const PathItem = () => {
  const { paths } = useSelector(getSelectValueState);

  return (
    <>
      <PathItem.Container>
        <Content> Origa</Content>
        {paths?.map(tmp => (
          <Content key={tmp}>➔ {tmp}</Content>
        ))}
      </PathItem.Container>
    </>
  );
};

PathItem.Container = styled.div`
  margin: 0 0 30px 0;
  padding: 25px 10px;
  background-color: ${props => props.theme.colors.surface};
  ${props => props.theme.fontStyle.title};
`;

export { PathItem };