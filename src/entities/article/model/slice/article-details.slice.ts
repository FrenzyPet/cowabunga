import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { fetchArticleById } from '../services/fetch-article-by-id/fetch-article-by-id'
import { IArticle } from '../types/article'
import type { IArticleDetailsSchema } from '../types/article-details-schema'

const initialState: IArticleDetailsSchema = {
	isLoading: false,
	data: undefined,
	error: undefined,
}

export const articleDetailsSlice = createSlice({
	name: 'articleDetails',
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleById.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<IArticle>) => {
				state.isLoading = false
				state.data = action.payload
			})
			.addCase(fetchArticleById.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice
