import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/button'

import { getCounterValue } from '../model/selectors/get-counter-value/get-counter-value'
import { counterActions } from '../model/slice/counter.slice'

export const Counter: FC = () => {
	const dispatch = useDispatch()
	const value = useSelector(getCounterValue)

	const increment = () => {
		dispatch(counterActions.increment())
	}
	const decrement = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div>
			<h1 data-testid='value-title'>{value}</h1>

			<Button data-testid='increment-button' onClick={increment}>
				increment
			</Button>

			<Button data-testid='decrement-button' onClick={decrement}>
				decrement
			</Button>
		</div>
	)
}
