const selectContact = (state) => state.contactsData.contacts;
const isLoading = (state) => state.contactsData.isLoading;
const error =(state) => state.contactsData.error;

export default{selectContact,isLoading,error} ;