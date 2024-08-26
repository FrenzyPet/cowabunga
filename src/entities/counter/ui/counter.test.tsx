import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender'

import { Counter } from './counter'

describe('counter', () => {
	test('render counter with initial state', () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
		expect(screen.getByTestId('value-title')).toHaveTextContent('10')
	})

	test('increment', () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
		const incrementButton = screen.getByTestId('increment-button')
		fireEvent.click(incrementButton)
		expect(screen.getByTestId('value-title')).toHaveTextContent('11')
	})

	test('decrement', () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
		const decrementButton = screen.getByTestId('decrement-button')
		fireEvent.click(decrementButton)
		expect(screen.getByTestId('value-title')).toHaveTextContent('9')
	})
})
