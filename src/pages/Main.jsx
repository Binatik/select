import React from "react";
import { useSelector } from "react-redux";

import { getSelectValueState } from "@src/store/redux/index";

import { Select } from "@cmp/select/Select";

const Main = () => {
  const { options } = useSelector(getSelectValueState);

  return (
    <>
      <Select options={options} />
    </>
  );
};

export { Main };