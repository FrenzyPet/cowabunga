import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/store-provider'

import { IArticle } from '../../types/article'

export const fetchArticleById = createAsyncThunk<IArticle, string, IThunkConfig<string>>(
	'articleDetails/fetchArticleById',
	async (articleId, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI

		try {
			const response = await extra.api.get<IArticle>(`/articles/${articleId}`)
			return response.data
		} catch (e) {
			console.log(e)
			return rejectWithValue('error')
		}
	},
)
