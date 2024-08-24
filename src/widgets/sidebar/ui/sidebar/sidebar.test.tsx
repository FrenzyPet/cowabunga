import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender'

import { Sidebar } from './sidebar'

describe('Sidebar', () => {
	test('render sidebar', () => {
		componentRender(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})

	test('toggle sidebar', () => {
		componentRender(<Sidebar />)
		const toggleButton = screen.getByTestId('sidebar-toggle')
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		fireEvent.click(toggleButton)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})
