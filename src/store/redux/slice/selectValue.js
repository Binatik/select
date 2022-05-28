import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  options: [
    {
      id: 0,
      typeValue: "",
      isLast: false,
      isShow: true,
      values: [
        {
          id: 0,
          isActiveValue: false,
          value: "Frontend",
        },
        {
          id: 1,
          isActiveValue: false,
          value: "Backend",
        },
      ],
    },
    {
      id: 1,
      typeValue: "Frontend",
      isLast: false,
      isShow: false,
      values: [
        {
          id: 0,
          isActiveValue: false,
          value: "html",
        },
        {
          id: 1,
          isActiveValue: false,
          value: "css",
        },
        {
          id: 2,
          isActiveValue: false,
          value: "javaScript",
        },
      ],
    },
    {
      id: 2,
      typeValue: "Backend",
      isLast: false,
      isShow: false,
      values: [
        {
          id: 0,
          isActiveValue: false,
          value: "node",
        },
        {
          id: 1,
          isActiveValue: false,
          value: "express",
        },
      ],
    },
    {
      id: 3,
      typeValue: "html",
      isLast: false,
      isShow: false,
      values: [
        {
          id: 0,
          isActiveValue: false,
          value: "tags",
        },
        {
          id: 1,
          isActiveValue: false,
          value: "class",
        },
      ],
    },
  ],

  paths: [],
};

const selectValue = createSlice({
  name: "selectValue",
  initialState,
  reducers: {
    renderOptions(state, action) {
      const { itemId, value, valueId } = action.payload;

      const currentOption = state.options[itemId];

      state.paths.length = 0;

      state.options = state.options.map(parentItem => {
        if (parentItem.id >= currentOption.id) {
          parentItem.isShow = false;
          parentItem.isLast = false;

          parentItem.values.forEach(item => {
            item.isActiveValue = false;
          });
        }

        return parentItem;
      });

      state.options = state.options.map(parentItem => {
        parentItem.values.forEach(item => {
          const isValue = item.value === value;
          const nextNecessaryOption = state.options.find(type => type.typeValue.toLowerCase() === item.value.toLowerCase());
          const currentValue = currentOption.values[valueId];

          if (isValue && !nextNecessaryOption) {
            currentOption.isShow = true;
            currentValue.isActiveValue = true;
            currentOption.isLast = true;
            
            state.paths.push(currentValue.value);
          } else if (!nextNecessaryOption) {
            currentValue.isActiveValue = true;
          } else if (isValue && nextNecessaryOption) {
            currentOption.isShow = true;
            nextNecessaryOption.isShow = true;
            state.paths.push(nextNecessaryOption.typeValue);
          }
        });

        return parentItem;
      });
    },
  },
});

export const { renderOptions } = selectValue.actions;
export default selectValue.reducer;
