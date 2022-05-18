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

const Select = ({ values }) => {
  function renderItem(value) {
    return value.isOpenSelect ? <Item key={value.id} titles={value.titles} /> : null;
  }
  return (
    <>
      <Container>
        <Chip />
        <Selects>{values?.map(value => renderItem(value))}</Selects>
      </Container>
    </>
  );
};

export { Select };
