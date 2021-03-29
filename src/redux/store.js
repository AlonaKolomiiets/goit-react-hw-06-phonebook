// import { createStore } from "redux";
// import rootReducer from "./toolkit/reducers/index";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./toolkit/reducers/index";

// const store = configureStore({ reducer: rootReducer });

// export default store;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./toolkit/reducers/index";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
