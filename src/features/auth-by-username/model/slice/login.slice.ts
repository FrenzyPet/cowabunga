import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { loginByUsername } from '../services/login-by-username/login-by-username'
import type { ILoginSchema } from '../types/login.dto'

const initialState: ILoginSchema = {
	isLoading: false,
	username: '',
	password: '',
	isSuccess: false,
}

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},

		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		},

		clearSuccess: (state) => {
			state.isSuccess = false
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(loginByUsername.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(loginByUsername.fulfilled, (state) => {
				state.isLoading = false
				state.isSuccess = true
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
