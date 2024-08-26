import type { StoreSchema } from 'app/providers/store-provider'

import { getCounterValue } from './get-counter-value'

describe('getCounterValue', () => {
	test('should return counter value', () => {
		const state: Partial<StoreSchema> = {
			counter: {
				value: 10,
			},
		}

		expect(getCounterValue(state as StoreSchema)).toEqual(10)
	})
})
