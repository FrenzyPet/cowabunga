import { Reducer, ReducersMapObject, UnknownAction, combineReducers } from '@reduxjs/toolkit'

import type { IStoreSchema, IStoreSchemaKeys, ReducerManager } from './store.dto'

export function createReducerManager(initialReducers: ReducersMapObject<IStoreSchema>): ReducerManager {
	const reducers = { ...initialReducers }

	let combinedReducer = combineReducers(reducers)

	let keysToRemove: IStoreSchemaKeys[] = []

	return {
		getReducerMap: () => reducers,

		reduce: (state: IStoreSchema, action: UnknownAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state }

				keysToRemove.forEach((key) => delete state[key])

				keysToRemove = []
			}
			return combinedReducer(state, action)
		},

		add: (key: IStoreSchemaKeys, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return
			}

			reducers[key] = reducer

			combinedReducer = combineReducers(reducers)
		},

		remove: (key: IStoreSchemaKeys) => {
			if (!key || !reducers[key]) {
				return
			}

			delete reducers[key]

			keysToRemove.push(key)

			combinedReducer = combineReducers(reducers)
		},
	}
}
