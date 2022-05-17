import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { openSelect } from "@src/store/redux/slice/selectValue";

const Option = styled.div`
  padding: 15px 10px;
  flex: 0 0 ${props => props.theme.grid.col3};
  background-color: ${props => props.theme.colors.surface};
`;

const Value = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 3px 10px;
  margin: 0 0 10px 0;
  background-color: ${props => props.theme.colors.primary};
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

const Item = ({ titles }) => {
  const dispatch = useDispatch();

  function open(event) {
    const title = event.target.textContent;
    dispatch(openSelect({ title }));
  }

  return (
    <>
      <Option>
        {titles?.map((title, index) => (
          <Value onClick={event => open(event)} type="button" key={index}>
            {title}
          </Value>
        ))}
      </Option>
    </>
  );
};

export { Item };
