import { configureStore } from "@reduxjs/toolkit";

import  contactsModule from "./contacts/contactsSlice";
import filtersModule  from "./filters/filtersSlice";

export const store = configureStore({
	reducer: {
		contactsData:  contactsModule.contactsReducer,
		filtersData: filtersModule.filtersReducer
	},

});

export default store;