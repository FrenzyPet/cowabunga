import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

import type { IUser, IUserSchema } from '../types/user.dto'

const initialState: IUserSchema = {}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<IUser>) => {
			state.authData = action.payload
		},

		initAutDate: (state) => {
			const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)

			if (user) {
				state.authData = JSON.parse(user)
			}
		},

		logout: (state) => {
			state.authData = undefined
			localStorage.removeItem(USER_LOCALSTORAGE_KEY)
		},
	},
})

export const { actions: userActions, reducer: userReducer } = userSlice
