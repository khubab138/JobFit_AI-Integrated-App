import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAiResult = createAsyncThunk("fetchResults", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
});

const AiSlice = createSlice({
  name: "ai",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAiResult.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAiResult.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
      state.isLoading = false
    });
    builder.addCase(fetchAiResult.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});

export default AiSlice.reducer;
