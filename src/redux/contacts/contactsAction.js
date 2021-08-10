// ==================== toolkit ==========================
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");
export const getContacts = createAction("contacts/setContacts");
export const setFilter = createAction("contacts/setFilter");
export const setLoader = createAction("contacts/setLoader");
export const setError = createAction("contacts/setError");
export const resetError = createAction("contacts/resetError");
