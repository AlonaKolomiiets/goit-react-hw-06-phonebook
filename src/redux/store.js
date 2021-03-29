// import { createStore } from "redux";
// import rootReducer from "./toolkit/reducers/index";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./toolkit/reducers/index";

const store = configureStore({ reducer: rootReducer });

export default store;
