import { createSlice  } from "@reduxjs/toolkit";
import projects from "../db/Projects.db";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    value: projects[0],
  },
  reducers: {
    setProject: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProject } = projectSlice.actions;

export default projectSlice.reducer;
