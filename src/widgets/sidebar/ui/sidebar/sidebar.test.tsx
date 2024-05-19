import { fireEvent, render, screen } from '@testing-library/react'

import { Sidebar } from './sidebar'

describe('Sidebar', () => {
	test('render sidebar', () => {
		render(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})

	test('toggle sidebar', () => {
		render(<Sidebar />)
		const toggleButton = screen.getByTestId('sidebar-toggle')
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		fireEvent.click(toggleButton)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})
