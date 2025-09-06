import { Reducer } from '@reduxjs/toolkit'
import { IReduxStoreWithManager } from 'app/providers/store-provider'
import { IStoreSchemaKeys } from 'app/providers/store-provider/config/store.dto'
import { FC, ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'

export type ReducersList = {
	[reducerKey in IStoreSchemaKeys]?: Reducer
}

type ReducersListEntry = [IStoreSchemaKeys, Reducer]

interface IDynamicModuleLoaderProps {
	children: ReactNode
	reducers: ReducersList
	removeAfterUnmount?: boolean
}

const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = ({ children, reducers, removeAfterUnmount = true }) => {
	const store = useStore() as IReduxStoreWithManager

	useEffect(() => {
		Object.entries(reducers).forEach(([reducerKey, reducer]: ReducersListEntry) =>
			store.reducerManager.add(reducerKey, reducer),
		)

		return () => {
			if (removeAfterUnmount) {
				Object.keys(reducers).forEach((reducerKey) => store.reducerManager.remove(reducerKey as IStoreSchemaKeys))
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return children
}

export default DynamicModuleLoader
