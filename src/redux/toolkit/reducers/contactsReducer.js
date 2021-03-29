import { createReducer } from "@reduxjs/toolkit";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CHANGE_FILTER,
  INITIAL_CONTACT,
} from "../../constants/index";
const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

const contacts = createReducer(initialState, {
  [ADD_CONTACT]: (state, { payload }) => ({
    ...state,
    items: [...state.items, payload],
  }),

  [DELETE_CONTACT]: (state, { payload }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== payload),
  }),

  [CHANGE_FILTER]: (state, { payload }) => ({
    ...state,
    filter: payload,
  }),
  [INITIAL_CONTACT]: (state, { payload }) => ({
    ...state,
    items: payload,
  }),
});

export default contacts;

// const contacts = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return { ...state, items: [...state.items, action.payload] };
//     case DELETE_CONTACT:
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };
//     case CHANGE_FILTER:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     case INITIAL_CONTACT:
//       return {
//         ...state,
//         items: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default contacts;
