import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/store-provider'

import { getProfileForm } from '../../selectors/get-profile-form/get-profile-form'
import { IProfile } from '../../types/profile'

export const updateProfileData = createAsyncThunk<IProfile, undefined, IThunkConfig<string>>(
	'profile/updateProfileData',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI

		const formData = getProfileForm(getState())

		try {
			const response = await extra.api.put<IProfile>('/profile', formData)
			return response.data
		} catch (e) {
			console.log(e)
			return rejectWithValue('error')
		}
	},
)
