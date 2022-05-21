import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/styleComponents";

import { Chip } from "./Сhip";
import { Item } from "./Item";

const Selects = styled.div`
  gap: 20px;
  flex-wrap: wrap;
  display: flex;
`;

const Select = ({ options }) => {
  function renderItem(element) {
    const isLastOpenSelect = element.isOpenSelect && element.values.length === 0;
    if (isLastOpenSelect) return <h2 key={element.id}> Больше нет селектов, тут любой компонент.</h2>;

    return element.isOpenSelect ? <Item key={element.id} values={element.values} /> : null;
  }
  return (
    <>
      <Container>
        <Chip />
        <Selects>{options?.map(element => renderItem(element))}</Selects>
      </Container>
    </>
  );
};

export { Select };
