import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/counter'
import { userReducer } from 'entities/user'
import type { NavigateOptions, To } from 'react-router-dom'
import { $api } from 'shared/api/api'

import { createReducerManager } from './reducer-manager'
import type { IStoreSchema } from './store.dto'

export function createReduxStore(initialState?: IStoreSchema, navigate?: (to: To, options?: NavigateOptions) => void) {
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

		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: $api,
						navigate,
					},
				},
			}),
	})

	// @ts-expect-error
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
