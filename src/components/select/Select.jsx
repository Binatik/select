import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/styleComponents";

import { Chip } from "./Chip";
import { Item } from "./Item";

const Selects = styled.div`
  gap: 20px;
  flex-wrap: wrap;
  display: flex;
`;

const Select = ({ values }) => {
  return (
    <>
      <Container>
        <Chip />
        <Selects>{values?.map(val => (val.isOpenSelect ? <Item key={val.id} titles={val.titles} сategory={val.сategory} /> : null))}</Selects>
      </Container>
    </>
  );
};

export { Select };
