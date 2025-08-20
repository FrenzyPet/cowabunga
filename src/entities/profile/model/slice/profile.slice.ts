import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { fetchProfileData } from '../services/fetch-profile-data/fetch-profile-data'
import type { IProfile, IProfileSchema } from '../types/profile'

const initialState: IProfileSchema = {
	readonly: true,
	isLoading: false,
	isSuccess: false,
	data: undefined,
	error: undefined,
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		},

		cancelEdit: (state) => {
			state.readonly = true
			state.form = state.data
		},

		updateProfile: (state, action: PayloadAction<IProfile>) => {
			state.form = {
				...state.data,
				...action.payload,
			}
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
				state.isLoading = false
				state.data = action.payload
				state.form = action.payload
				state.isSuccess = true
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
