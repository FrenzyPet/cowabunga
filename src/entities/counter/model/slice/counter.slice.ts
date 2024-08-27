import { createSlice } from '@reduxjs/toolkit'

import type { CounterSchema } from '../types/counter-schema'

const initialState: CounterSchema = {
	value: 0,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value++
		},

		decrement: (state) => {
			state.value--
		},
	},
})

export const { actions: counterActions, reducer: counterReducer } = counterSlice