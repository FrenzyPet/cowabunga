import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/counter'
import { userReducer } from 'entities/user'

import { StoreSchema } from './store.dto'

export function createReduxStore(initialState?: StoreSchema) {
	const rootReducer: ReducersMapObject<StoreSchema> = {
		counter: counterReducer,
		user: userReducer,
	}

	return configureStore<StoreSchema>({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	})
}
