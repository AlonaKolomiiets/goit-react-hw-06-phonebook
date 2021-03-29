import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsReducer";

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const rootReducer = combineReducers({
  contacts: persistedReducer,
});

export default rootReducer;
// import { combineReducers } from "redux";
// import contacts from "./contactsReducer";

// const rootReducer = combineReducers({
//   contacts,
// });

// export default rootReducer;
