import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  options: [
    {
      id: 1,
      position: 0,
      isOpenSelect: true,
      сategory: null,
      values: ["Frontend", "Backend"],
    },
    {
      id: 2,
      position: 1,
      isOpenSelect: false,
      сategory: "Frontend",
      values: ["html", "css", "javascript"],
    },
    {
      id: 3,
      position: 2,
      isOpenSelect: false,
      сategory: "html",
      values: ["tags"],
    },
    {
      id: 4,
      position: 3,
      isOpenSelect: false,
      сategory: "tags",
      values: ["div", "span"],
    },
    {
      id: 5,
      position: 4,
      isOpenSelect: false,
      сategory: "div",
      values: [],
    },
    {
      id: 6,
      position: 4,
      isOpenSelect: false,
      сategory: "span",
      values: [],
    },
    {
      id: 7,
      position: 1,
      isOpenSelect: false,
      сategory: "Backend",
      values: ["node"],
    },

    {
      id: 8,
      position: 2,
      isOpenSelect: false,
      сategory: "node",
      values: ["epress"],
    },
    {
      id: 9,
      position: 3,
      isOpenSelect: false,
      сategory: "epress",
      values: [],
    },
  ],

  chips: [],
};

const selectValue = createSlice({
  name: "selectValue",
  initialState,
  reducers: {
    openSelect(state, action) {
      const { title } = action.payload;

      const activeElement = state.options.find(element => element.сategory === title);

      state.chips.length = 0;

      state.options = state.options.map(element => {
        if (activeElement?.position <= element.position) {
          element.isOpenSelect = false;
        }

        if (element.сategory === title) {
          element.isOpenSelect = true;
        }

        if (element.isOpenSelect) {
          state.chips.push(element.сategory);
        }
        return element;
      });
    },
  },
});

export const { openSelect } = selectValue.actions;
export default selectValue.reducer;
