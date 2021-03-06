// ==================== toolkit ==========================

import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  setFilter,
} from "./contactsAction";

const itemsReducer = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,

  [addContactsSuccess]: (state, action) => {
    if (
      state.some(
        (item) => item.name.toLowerCase() === action.payload.name.toLowerCase()
      )
    ) {
      alert(action.payload.name + " is already in contact list");
      return state;
    }
    return [...state, action.payload];
  },

  [deleteContactsSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

const isLoadingReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

const errorReducer = createReducer("", {
  [getContactsRequest]: () => "",
  [getContactsError]: (_, { payload }) => payload,
  [addContactsRequest]: () => "",
  [addContactsError]: (_, { payload }) => payload,
  [deleteContactsRequest]: () => "",
  [deleteContactsError]: (_, { payload }) => payload,
});

const filterReducer = createReducer("", {
  [setFilter]: (_, action) => action.payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default contactsReducer;
