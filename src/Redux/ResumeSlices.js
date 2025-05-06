// src/redux/resumeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  applyingFor: '',
  email: '',
  phone: '',
  address: '',
  aboutMe: '',
  skills: '',
  education: [{ heading: '', description: '' }],
  certificates: [{ CerName: '', cerDescription: '' }],
  experience: [{ exName: '', exDescription: '' }],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    updateEducation: (state, action) => {
      const { index, field, value } = action.payload;
      state.education[index][field] = value;
    },
    addEducation: (state) => {
      state.education.push({ heading: '', description: '' });
    },
    updateCertificate: (state, action) => {
      const { index, field, value } = action.payload;
      state.certificates[index][field] = value;
    },
    addCertificate: (state) => {
      state.certificates.push({ CerName: '', cerDescription: '' });
    },
    updateExperience: (state, action) => {
      const { index, field, value } = action.payload;
      state.experience[index][field] = value;
    },
    addExperience: (state) => {
      state.experience.push({ exName: '', exDescription: '' });
    },
  },
});

export const {
  updateField,
  updateEducation,
  addEducation,
  updateCertificate,
  addCertificate,
  updateExperience,
  addExperience,
} = resumeSlice.actions;

export default resumeSlice.reducer;
