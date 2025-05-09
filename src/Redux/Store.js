import {configureStore} from "@reduxjs/toolkit"
import resumeReducer from "./ResumeSlices"
import aiReducer from "./AiSlice"
import pdfReducer from "./PdfSlice"

export const Store = configureStore({
    reducer:{
        resume: resumeReducer,
        ai:aiReducer,
        pdf:pdfReducer,
    }
})