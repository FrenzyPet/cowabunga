import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/counter'
import { userReducer } from 'entities/user'
import { loginReducer } from 'features/auth-by-username'

import type { IStoreSchema } from './store.dto'

export function createReduxStore(initialState?: IStoreSchema) {
	const rootReducer: ReducersMapObject<IStoreSchema> = {
		counter: counterReducer,
		user: userReducer,
		login: loginReducer,
	}

	return configureStore<IStoreSchema>({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	})
}
