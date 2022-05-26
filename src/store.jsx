import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./providers/projectSlice";
import modalSlice from "./providers/modalSlice";

export default configureStore({
  reducer: {
    project: projectSlice,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
