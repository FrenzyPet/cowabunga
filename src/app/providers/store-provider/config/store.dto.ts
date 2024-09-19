import type { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'
import type { ICounterSchema } from 'entities/counter'
import type { IProfileSchema } from 'entities/profile'
import type { IUserSchema } from 'entities/user'
import type { ILoginSchema } from 'features/auth-by-username'

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
	profile?: IProfileSchema
}

export type IStoreSchemaKeys = keyof IStoreSchema

export interface IReduxStoreWithManager extends EnhancedStore<IStoreSchema> {
	reducerManager: ReducerManager
}
