import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/counter'

import { StoreSchema } from './store.dto'

export function createReduxStore(initialState?: StoreSchema) {
	return configureStore<StoreSchema>({
		reducer: {
			counter: counterReducer,
		},
		devTools: __IS_DEV__,
		preloadedState: initialState,
	})
}
