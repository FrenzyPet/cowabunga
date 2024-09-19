import { createSlice } from '@reduxjs/toolkit'

import type { IProfileSchema } from '../types/profile'

const initialState: IProfileSchema = {
	readonly: true,
	isLoading: false,
	data: undefined,
	error: undefined,
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
