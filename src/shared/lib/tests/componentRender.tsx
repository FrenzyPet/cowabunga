import { render } from '@testing-library/react'
import { IStoreSchema, StoreProvider } from 'app/providers/store-provider'
import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

export interface componentRenderOptions {
	route?: string
	initialState?: Partial<IStoreSchema>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
	const { route = '/', initialState } = options

	return render(
		<StoreProvider initialState={initialState as IStoreSchema}>
			<MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
		</StoreProvider>,
	)
}
