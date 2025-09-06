import type { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'
import type { AxiosInstance } from 'axios'
import type { IArticleDetailsSchema } from 'entities/article'
import type { ICounterSchema } from 'entities/counter'
import type { IProfileSchema } from 'entities/profile'
import type { IUserSchema } from 'entities/user'
import type { ILoginSchema } from 'features/auth-by-username'
import type { NavigateOptions, To } from 'react-router-dom'

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<IStoreSchema>
	reduce: (state: IStoreSchema, action: UnknownAction) => Partial<IStoreSchema>
	add: (key: IStoreSchemaKeys, reducer: Reducer) => void
	remove: (key: IStoreSchemaKeys) => void
}

export interface IStoreSchema {
	counter: ICounterSchema
	user: IUserSchema

	// async
	login?: ILoginSchema
	profile?: IProfileSchema
	articleDetails?: IArticleDetailsSchema
}

export type IStoreSchemaKeys = keyof IStoreSchema

export interface IReduxStoreWithManager extends EnhancedStore<IStoreSchema> {
	reducerManager: ReducerManager
}

export interface IThunkExtraArg {
	api: AxiosInstance
	navigate: (to: To, options?: NavigateOptions) => void
}

export interface IThunkConfig<T> {
	rejectValue: T
	extra: IThunkExtraArg
	state: IStoreSchema
}
