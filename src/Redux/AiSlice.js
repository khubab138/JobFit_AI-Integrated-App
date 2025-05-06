import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  applyingFor: "",
  email: "",
  phone: "",
  address: "",
  aboutMe: "",
  skills: "",
  education: [{ heading: "", description: "" }],
  certificates: [{ CerName: "", cerDescription: "" }],
  experience: [{ exName: "", exDescription: "" }],
};

const AiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {
    getField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});


export const {getField} = AiSlice.actions;
export default AiSlice.reducer;
