import { render, screen } from '@testing-library/react'

import { Button, ButtonTheme } from './button'

describe('Button', () => {
	test('render', () => {
		render(<Button>TEST</Button>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})

	test('render with clear theme class', () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
		expect(screen.getByText('TEST')).toHaveClass('clear')
		screen.debug()
	})
})
