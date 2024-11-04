import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";
import toast from "react-hot-toast";

const {
	getContacts,
	postContact,
	deleteContact,
} = api;

const apiGetContacts =createAsyncThunk(
	"contacts/fetchAll",
	async (_, thunkApi) => {
		try {
			const data = await getContacts();
			return data;
		} catch (error) {
			toast.error(`No contacts found.😔 Try again later.📢${error.message}`);
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

const apiPostContacts =createAsyncThunk(
	"contacts/addContact",
	async (contactData, thunkApi) => {
		try {
			const data = await postContact(contactData);
			return data;
		} catch (error) {
			toast.error(`Failed to add contact.🤷‍♀️Try again later.📢${error.message}`);
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

const apiDeleteContacts =createAsyncThunk(
	"contacts/deleteContact",
	async (id, thunkApi) => {
		try {
			const data = await deleteContact(id);
			return data;
		} catch (error) {
			toast.error(`Failed to delete contact.🙄Try again later.📢${error.message}`);
			return thunkApi.rejectWithValue(error.message);
		}
	}
);



export default {
	apiGetContacts,
	apiPostContacts,
	apiDeleteContacts
} ;
