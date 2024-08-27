import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { createReduxStore } from '../config/store'
import type { StoreSchema } from '../config/store.dto'

interface IStoreProviderProps {
	children?: ReactNode
	initialState?: StoreSchema
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }) => {
	const store = createReduxStore(initialState)

	return <Provider store={store}>{children}</Provider>
}