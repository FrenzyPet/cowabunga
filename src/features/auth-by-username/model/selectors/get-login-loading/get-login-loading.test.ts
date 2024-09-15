import { IStoreSchema } from 'app/providers/store-provider'
import type { DeepPartial } from 'app/types/extends'

import { getLoginLoading } from './get-login-loading'

describe('get login loading', () => {
	test('should return true', () => {
		const state: DeepPartial<IStoreSchema> = {
			login: {
				isLoading: true,
			},
		}

		expect(getLoginLoading(state as IStoreSchema)).toEqual(true)
	})

	test('should return false', () => {
		const state: DeepPartial<IStoreSchema> = {
			login: {
				isLoading: false,
			},
		}

		expect(getLoginLoading(state as IStoreSchema)).toEqual(false)
	})

	test('should work with empty state', () => {
		const state: DeepPartial<IStoreSchema> = {}

		expect(getLoginLoading(state as IStoreSchema)).toEqual(false)
	})
})
