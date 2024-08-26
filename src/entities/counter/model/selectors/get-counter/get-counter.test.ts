import type { StoreSchema } from 'app/providers/store-provider'

import { getCounter } from './get-counter'

describe('getCounter', () => {
	test('should return counter state', () => {
		const state: Partial<StoreSchema> = {
			counter: {
				value: 10,
			},
		}

		expect(getCounter(state as StoreSchema)).toEqual({ value: 10 })
	})
})
