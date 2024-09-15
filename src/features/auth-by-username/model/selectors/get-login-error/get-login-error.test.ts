import { IStoreSchema } from 'app/providers/store-provider'
import type { DeepPartial } from 'app/types/extends'

import { getLoginError } from './get-login-error'

describe('get login error', () => {
	test('should return error', () => {
		const state: DeepPartial<IStoreSchema> = {
			login: {
				error: 'error',
			},
		}

		expect(getLoginError(state as IStoreSchema)).toEqual('error')
	})

	test('should work with empty state', () => {
		const state: DeepPartial<IStoreSchema> = {}

		expect(getLoginError(state as IStoreSchema)).toEqual(false)
	})
})
