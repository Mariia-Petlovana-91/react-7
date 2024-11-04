import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	filters:""
};

const filtersSlice = createSlice({
	name: "filter",
	initialState: INITIAL_STATE,
	reducers: {
		changeFilter: (state, action) => {
			state.filters = action.payload
		}
	}
});

const filtersReducer = filtersSlice.reducer;
const { changeFilter } = filtersSlice.actions;

export default {
	filtersReducer,
	changeFilter
}