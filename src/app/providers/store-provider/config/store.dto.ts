import type { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'
import type { ICounterSchema } from 'entities/counter'
import type { IUserSchema } from 'entities/user'
import { ILoginSchema } from 'features/auth-by-username'

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<IStoreSchema>
	reduce: (state: IStoreSchema, action: UnknownAction) => Partial<IStoreSchema>
	add: (key: IStoreSchemaKeys, reducer: Reducer) => void
	remove: (key: IStoreSchemaKeys) => void
}

export interface IStoreSchema {
	counter: ICounterSchema
	user: IUserSchema
	login?: ILoginSchema
}

export type IStoreSchemaKeys = keyof IStoreSchema

export interface IReduxStoreWithManager extends EnhancedStore<IStoreSchema> {
	reducerManager: ReducerManager
}
