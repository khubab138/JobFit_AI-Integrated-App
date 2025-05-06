import {configureStore} from "@reduxjs/toolkit"
import resumeReducer from "./ResumeSlices"
import aiReducer from "./AiSlice"

export const Store = configureStore({
    reducer:{
        resume: resumeReducer,
        ai:aiReducer,
    }
})