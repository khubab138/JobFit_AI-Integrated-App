import {createSlice} from "@reduxjs/toolkit"


  const   initialState = {
        name: "",
        applyingFor: "",
        email: "",
        phone: "",
        address: "",
        aboutMe: "",
        education: [{ heading: "", description: "" }],
        certificates: [{ CerName: "", cerDescription: "" }],
        skills: "",
        experience: [{ exName: "", exDescription: "" }],
      }

const ResumeSlices = createSlice({
      

    name:"resume",
    initialState,
    reducers:{
        increment:state =>{state.value += 1},
        decrement:state =>{state.value -= 1},
        byValue:(state, action) =>{state.value += action.payload},
    }

})

export const {increment,decrement, byValue} = ResumeSlices.actions
export default ResumeSlices.reducer