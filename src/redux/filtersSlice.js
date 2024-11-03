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

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;