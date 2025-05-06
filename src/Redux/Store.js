import {configureStore} from "@reduxjs/toolkit"
import resumeReducer from "./ResumeSlices"

export const Store = configureStore({
    reducer:{
        resume: resumeReducer,
    }
})