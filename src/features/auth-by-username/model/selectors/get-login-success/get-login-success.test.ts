import { IStoreSchema } from 'app/providers/store-provider'
import { DeepPartial } from 'app/types/extends'

import { getLoginSuccess } from './get-login-success'

describe('get login success', () => {
	test('should return true', () => {
		const state: DeepPartial<IStoreSchema> = {
			login: {
				isSuccess: true,
			},
		}

		expect(getLoginSuccess(state as IStoreSchema)).toEqual(true)
	})

	test('should work with empty state', () => {
		const state: DeepPartial<IStoreSchema> = {}

		expect(getLoginSuccess(state as IStoreSchema)).toEqual(false)
	})
})
