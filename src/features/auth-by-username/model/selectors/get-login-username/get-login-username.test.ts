import { IStoreSchema } from 'app/providers/store-provider'
import type { DeepPartial } from 'app/types/extends'

import { getLoginUsername } from './get-login-username'

describe('get login username', () => {
	test('should return admin', () => {
		const state: DeepPartial<IStoreSchema> = {
			login: {
				username: 'admin',
			},
		}

		expect(getLoginUsername(state as IStoreSchema)).toEqual('admin')
	})

	test('should work with empty state', () => {
		const state: DeepPartial<IStoreSchema> = {}

		expect(getLoginUsername(state as IStoreSchema)).toEqual('')
	})
})
