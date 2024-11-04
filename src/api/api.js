import axios from "axios";
import  API_KEY  from "./apiKey";


const contactsInstance = axios.create({
	baseURL: `https://${API_KEY}`
})


async function getContacts() {
      try {
          const response = await contactsInstance.get('/contacts');
          return response.data;
          
      } catch (error) {
          throw error;
      }
}

async function postContact(contact) {
    try {
	    const response = await contactsInstance.post('/contacts',contact);
        return response.data;
    } catch (error) {
        throw error;
    }
}


async function deleteContact(id) {
    try {
        await contactsInstance.delete(`/contacts/${id}`);
        return id;
    } catch (error) {
        throw error;
    }
}


export default {
    getContacts,
    postContact,
    deleteContact
};