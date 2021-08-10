// ==================== toolkit ==========================

import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  getContacts,
  setFilter,
  setLoader,
  setError,
  resetError,
} from "./contactsAction";

const itemsReducer = createReducer([], {
  [addContact]: (state, action) => {
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

  [deleteContact]: (state, action) =>
    state.filter((item) => item.id !== action.payload),

  [getContacts]: (_, { payload }) => payload,
});

const filterReducer = createReducer("", {
  [setFilter]: (_, action) => action.payload,
});

const isLoadingReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const errorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
});

export default contactsReducer;
