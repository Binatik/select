import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  values: [
    {
      id: 1,
      isOpenSelect: true,
      сategory: null,
      titles: ["Frontend", "Backend"],
    },
    {
      id: 2,
      isOpenSelect: false,
      сategory: "Frontend",
      titles: ["html", "css", "javascript"],
    },
    {
      id: 3,
      isOpenSelect: false,
      сategory: "html",
      titles: ["tags"],
    },
    {
      id: 4,
      isOpenSelect: false,
      сategory: "tags",
      titles: ["div", "span"],
    },

    {
      id: 5,
      isOpenSelect: false,
      сategory: "Backend",
      titles: ["node", "python"],
    },
  ],

  chip: '',
};

const selectValue = createSlice({
  name: "selectValue",
  initialState,
  reducers: {
    openSelect(state, action) {
      const { title } = action.payload;

      state.values = state.values.map(element => {
        element.isOpenSelect = false;
        state.values[0].isOpenSelect = true;
        if (element.сategory === title) {

          state.chip += element.сategory + ' ⇒ ';
          element.isOpenSelect = true;
        }
        return element;
      });
    },
  },
});

export const { openSelect } = selectValue.actions;
export default selectValue.reducer;
