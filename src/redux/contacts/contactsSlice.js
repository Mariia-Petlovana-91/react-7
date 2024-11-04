import { createSelector, createSlice } from "@reduxjs/toolkit";
import selectedContact from "./selectorsContacts";
import selectFilter from "../filters/selectorsFilter";
import apiModule from "../contactsOps";

const {
	apiGetContacts,
	apiPostContacts,
	apiDeleteContacts
} = apiModule;

const { selectContact } = selectedContact;

const INITIAL_STATE = {
	contacts: null,
	isLoading: false,
	error: null
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState: INITIAL_STATE,
	extraReducers: (builder) => {
		builder
			.addCase(apiGetContacts.pending, (state) => {
			state.isLoading = true,
			state.error = null
		})
			.addCase(apiGetContacts.fulfilled, (state, action) => {
			state.isLoading = false,
			state.contacts = action.payload
		})
		     .addCase(apiGetContacts.rejected, (state, action) => {
			state.isLoading = false,
			state.error = action.payload
		 })
			.addCase(apiPostContacts.pending, (state) => {
			state.isLoading = true,
			state.error = null
		})
			.addCase(apiPostContacts.fulfilled, (state, action) => {
				state.isLoading = false,
				state.contacts.push(action.payload);
		})
		     .addCase(apiPostContacts.rejected, (state, action) => {
			state.isLoading = false
		})
			.addCase(apiDeleteContacts.pending, (state) => {
			state.isLoading = true,
			state.error = null
		})
			.addCase(apiDeleteContacts.fulfilled, (state, action) => {
                        state.isLoading = false;
                        const index = state.contacts.findIndex(contact => contact.id === action.payload);
                        if (index !== -1) {
                          state.contacts.splice(index, 1);
                        }
            })
		.addCase(apiDeleteContacts.rejected, (state, action) => {
			state.isLoading = false
		})
		
	}
});

const selectFilteredContacts = createSelector(
    [selectContact, selectFilter],
    (contacts, filter) => {
        if (Array.isArray(contacts)) {
		return  contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase().trim())
        );
        }
	    return;
    }
);

const contactsReducer = contactsSlice.reducer;

export default {
	contactsReducer,
	apiGetContacts,
	apiPostContacts,
	apiDeleteContacts,
	selectFilteredContacts
}