import type { IStoreSchema } from 'app/providers/store-provider'

import { getCounter } from './get-counter'

describe('getCounter', () => {
	test('should return counter state', () => {
		const state: Partial<IStoreSchema> = {
			counter: {
				value: 10,
			},
		}

		expect(getCounter(state as IStoreSchema)).toEqual({ value: 10 })
	})
})
