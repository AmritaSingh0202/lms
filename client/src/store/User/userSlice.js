import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  type:null,
  isAdmin:false,
  isTeacher:false,
  isStudent:false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      
      if(state.user.teacherType){
        state.type = state.user.teacherType
      }
      if(state.user.studentType){
        state.type = state.user.studentType
      }
      if(state.user.adminType){
        state.type = state.user.adminType
      }
    },

    logout(state, action) {
      state.user = null;
      state.isAuthenticated = false;
    },

    setAdmin(state, action) {
      state.isAdmin = action.payload;
    },

    setTeacher(state, action) {
      state.isTeacher = action.payload;
    },

    setStudent(state, action) {
      state.isStudent = action.payload;
    },
  },
});

export const { setUser, logout, setLogin } = userSlice.actions;

export default userSlice.reducer;
