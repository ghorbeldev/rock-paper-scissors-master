import { createSlice } from '@reduxjs/toolkit';

const initialState = { score: +localStorage.getItem('score') || 0 };

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.score += 1;
			localStorage.score = state.score;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
