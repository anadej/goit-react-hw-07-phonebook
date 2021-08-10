import {
  addContact,
  deleteContact,
  getContacts,
} from "../../services/contacts_api";
import {
  addContact as addContactActionCreator,
  deleteContact as deleteContactActionCreator,
  getContacts as getContactsActionCreator,
  setLoader,
  setError,
} from "./contactsAction";

export const getContactsOperation = () => async (dispatch, getState) => {
  try {
    dispatch(setLoader()); //request
    const res = await getContacts();
    dispatch(getContactsActionCreator(res)); //success
  } catch (error) {
    dispatch(setError(error.message)); //error
  } finally {
    dispatch(setLoader());
  }
};

export const addContactOperation = (user) => async (dispatch, getState) => {
  try {
    dispatch(setLoader()); //request
    //запрос к backend на добавление одного контакта, возвращает id
    const res = await addContact(user);
    //обоновляем state c id контакта, полученного из базы
    dispatch(addContactActionCreator({ ...user, id: res.name })); //success
  } catch (error) {
    dispatch(setError(error.message)); //error
  } finally {
    dispatch(setLoader());
  }
};

export const deleteContactOperation = (id) => async (dispatch, getState) => {
  try {
    dispatch(setLoader()); //request
    await deleteContact(id);
    dispatch(deleteContactActionCreator(id)); //success
  } catch (error) {
    dispatch(setError(error.message)); //error
  } finally {
    dispatch(setLoader());
  }
};
