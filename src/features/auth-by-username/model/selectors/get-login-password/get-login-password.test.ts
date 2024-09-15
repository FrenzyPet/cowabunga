import { IStoreSchema } from 'app/providers/store-provider'
import type { DeepPartial } from 'app/types/extends'

import { getLoginPassword } from './get-login-password'

describe('get login password', () => {
	test('should return password', () => {
		const state: DeepPartial<IStoreSchema> = {
			login: {
				password: 'password',
			},
		}

		expect(getLoginPassword(state as IStoreSchema)).toEqual('password')
	})

	test('should return empty string', () => {
		const state: DeepPartial<IStoreSchema> = {
			login: {
				password: '',
			},
		}

		expect(getLoginPassword(state as IStoreSchema)).toEqual('')
	})

	test('should work with empty state', () => {
		const state: DeepPartial<IStoreSchema> = {}

		expect(getLoginPassword(state as IStoreSchema)).toEqual('')
	})
})
