import { createSlice } from '@reduxjs/toolkit'

import type { IUserSchema } from '../types/user.dto'

const initialState: IUserSchema = {}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
})

export const { actions: userActions, reducer: userReducer } = userSlice
