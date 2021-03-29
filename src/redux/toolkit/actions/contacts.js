import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CHANGE_FILTER,
  INITIAL_CONTACT,
} from "../../constants/index";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction(ADD_CONTACT);
// export const addContact = (contact) => ({
//   type: ADD_CONTACT,
//   payload: contact,
// });

export const deleteContact = createAction(DELETE_CONTACT);
// export const deleteContact = (id) => ({
//   type: DELETE_CONTACT,
//   payload: id,
// });

export const changeFilter = createAction(CHANGE_FILTER);

// export const changeFilter = (filter) => ({
//   type: CHANGE_FILTER,
//   payload: filter,
// });

export const initialContacts = createAction(INITIAL_CONTACT);

// export const initialContacts = (contacts) => ({
//   type: INITIAL_CONTACT,
//   payload: contacts,
// });
