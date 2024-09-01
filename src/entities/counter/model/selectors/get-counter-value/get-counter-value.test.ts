import type { IStoreSchema } from 'app/providers/store-provider'

import { getCounterValue } from './get-counter-value'

describe('getCounterValue', () => {
	test('should return counter value', () => {
		const state: Partial<IStoreSchema> = {
			counter: {
				value: 10,
			},
		}

		expect(getCounterValue(state as IStoreSchema)).toEqual(10)
	})
})
