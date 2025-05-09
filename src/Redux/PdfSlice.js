import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pdfFile: null,
  error: "",
};

const PdfSlice = createSlice({
  name: "pdf",
  initialState,
  reducers: {
    setPdfFile: (state, action) => {
      state.pdfFile = action.payload;
      state.error = "";
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.pdfFile = null;
    },
    setReset: (state) => {
      state.pdfFile = null;
      state.error = "";
    },
  },
});

export const { setPdfFile, setError, setReset } = PdfSlice.actions;
export default PdfSlice.reducer;
