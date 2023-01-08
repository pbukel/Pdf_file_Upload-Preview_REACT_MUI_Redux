import { createSlice } from "@reduxjs/toolkit";

type ObjProps = {
  [key: string]: any;
};

export interface CounterState {
  collaps1: boolean;
  collaps2: boolean;
  files: ObjProps[];
  previewIndex: number;
  selectedFileIndex: number;
}

const initialState: CounterState = {
  collaps1: true,
  collaps2: false,
  files: [],
  previewIndex: 0,
  selectedFileIndex: -1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCollapse1: (state, { payload }) => {
      if (payload === false) {
        if (state.collaps2 === true) {
          state.collaps2 = false;
        }
      }
      state.collaps1 = !payload;
    },
    setCollapse2: (state, { payload }) => {
      if (payload === false) {
        if (state.collaps1 === true) {
          state.collaps1 = false;
        }
      }
      state.collaps2 = !payload;
    },
    addFileToArr: (state, { payload }) => {
      state.files = [...state.files, payload];
      state.previewIndex = state.files.length - 1;
    },
    removeFileFromArr: (state, { payload }) => {
      state.files = state.files.filter((item, index) => index !== payload);
    },
    removeAllFromArr: (state) => {
      state.files = [];
    },
    setPreviewIndex: (state, { payload }) => {
      state.previewIndex = payload;
      state.selectedFileIndex = payload;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const {
  setCollapse1,
  setCollapse2,
  addFileToArr,
  removeFileFromArr,
  removeAllFromArr,
  setPreviewIndex,
} = counterSlice.actions;

export default counterSlice.reducer;
