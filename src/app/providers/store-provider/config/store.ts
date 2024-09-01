import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/counter'
import { userReducer } from 'entities/user'

import { createReducerManager } from './reducer-manager'
import type { IStoreSchema } from './store.dto'

export function createReduxStore(initialState?: IStoreSchema) {
	const rootReducer: ReducersMapObject<IStoreSchema> = {
		counter: counterReducer,
		user: userReducer,
	}

	const reducerManager = createReducerManager(rootReducer)

	const store = configureStore<IStoreSchema>({
		// @ts-expect-error
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	})

	// @ts-expect-error
	store.reducerManager = reducerManager

	return store
}
