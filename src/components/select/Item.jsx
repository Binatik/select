import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { renderOptions } from "@src/store/redux/slice/selectValue";

const Option = styled.div`
  padding: 15px 10px;
  flex: 1 1 ${props => props.theme.grid.col3};
  background-color: ${props => props.theme.colors.surface};
`;

const Value = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 3px 10px;
  margin: 0 0 10px 0;
  background-color: ${props => (props.isActive ? props.theme.colors.background : props.theme.colors.primary)};
  color: ${props => (props.isActive ? props.theme.colors.primary : props.theme.colors.secondary)};
  transition: background-color 0.1s;
  ${props => props.theme.fontStyle.title};
  &:hover {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
  }
  &:last-child {
    margin: 0;
  }
`;

const Item = ({ values, itemId }) => {
  const dispatch = useDispatch();

  function render(event, valueId) {
    const value = event.target.textContent;

    dispatch(renderOptions({ itemId, value, valueId}));
  }

  return (
    <>
      <Option>
        {values?.map(value => (
          <Value key={value.id} isActive={value.isActiveValue} onClick={(event) => render(event, value.id)} type="button">
            {value.value}
          </Value>
        ))}
      </Option>
    </>
  );
};

export { Item };
