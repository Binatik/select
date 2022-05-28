import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/styleComponents";

import { PathItem } from "./PathItem";
import { Item } from "./Item";

const Selects = styled.div`
  gap: 20px;
  flex-wrap: wrap;
  display: flex;
`;

const Select = ({ options }) => {
  function renderItem(parent) {
    if (parent.isLast)
      return (
        <React.Fragment key={parent.id}>
          <Item itemId={parent.id} values={parent.values} />
          <h2> Больше нет селектов, тут любой компонент.</h2>
        </React.Fragment>
      );

    return parent.isShow ? <Item key={parent.id} itemId={parent.id} values={parent.values} /> : null;
  }
  return (
    <>
      <Container>
        <PathItem />
        <Selects>{options?.map(item => renderItem(item))}</Selects>
      </Container>
    </>
  );
};

export { Select };
