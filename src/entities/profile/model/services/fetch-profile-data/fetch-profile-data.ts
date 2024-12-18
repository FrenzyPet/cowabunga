import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/store-provider'

import { IProfile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<IProfile, undefined, IThunkConfig<string>>(
	'profile/fetchProfileData',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI

		try {
			const response = await extra.api.get<IProfile>('/profile')
			return response.data
		} catch (e) {
			console.log(e)
			return rejectWithValue('error')
		}
	},
)
