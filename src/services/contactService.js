import axios from "axios";

const SERVER_URL = "http://localhost:9000";

export const getAllContacts = () => {
  return axios.get(`${SERVER_URL}/Contacts`);
};

export const getContact = (contactId) => {
  return axios.get(`${SERVER_URL}/Contacts/${contactId}`);
};

export const createContact = (contact) => {
  return axios.post(`${SERVER_URL}/Contacts`, contact);
};

export const updateContact = (contact, contactId) => {
  return axios.put(`${SERVER_URL}/Contacts/${contactId}`, contact);
};

export const deleteContact = (contactId) => {
  return axios.delete(`${SERVER_URL}/Contacts/${contactId}`);
};

export const getAllGroups = () => {
  return axios.get(`${SERVER_URL}/Groups`);
};

export const getGroup = (groupId) => {
  return axios.get(`${SERVER_URL}/Groups/${groupId}`);
};
