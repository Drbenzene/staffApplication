import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index";


// composeWithDevTools(applyMiddleware(thunk, logger)

export const store = configureStore(
  {
    reducer: rootReducer,
  },
);