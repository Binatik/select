import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  values: [
    {
      id: 1,
      position: 0,
      isOpenSelect: true,
      сategory: null,
      titles: ["Frontend", "Backend"],
    },
    {
      id: 2,
      position: 1,
      isOpenSelect: false,
      сategory: "Frontend",
      titles: ["html", "css", "javascript"],
    },
    {
      id: 3,
      position: 2,
      isOpenSelect: false,
      сategory: "html",
      titles: ["tags"],
    },
    {
      id: 4,
      position: 3,
      isOpenSelect: false,
      сategory: "tags",
      titles: ["div", "span"],
    },

    {
      id: 5,
      position: 1,
      isOpenSelect: false,
      сategory: "Backend",
      titles: ["node", "python"],
    },

    {
      id: 6,
      position: 2,
      isOpenSelect: false,
      сategory: "node",
      titles: ["epress"],
    },

    {
      id: 7,
      position: 2,
      isOpenSelect: false,
      сategory: "python",
      titles: ["key"],
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

      const current = state.values.find(element => element.сategory === title);

      state.values = state.values.map(element => {
        if (current?.position <= element.position) {
          element.isOpenSelect = false;
          state.chips.slice(element.position);
        }
 
        if (element.сategory === title) {
          state.chips.push(`${element.сategory} =>`);
          element.isOpenSelect = true;
        }
        return element;
      });
    },
  },
});

export const { openSelect } = selectValue.actions;
export default selectValue.reducer;
