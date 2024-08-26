import { render } from '@testing-library/react'
import { StoreProvider, StoreSchema } from 'app/providers/store-provider'
import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

export interface componentRenderOptions {
	route?: string
	initialState?: Partial<StoreSchema>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
	const { route = '/', initialState } = options

	return render(
		<StoreProvider initialState={initialState as StoreSchema}>
			<MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
		</StoreProvider>,
	)
}
