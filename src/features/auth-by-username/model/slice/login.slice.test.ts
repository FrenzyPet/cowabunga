import type { DeepPartial } from 'app/types/extends'

import { ILoginSchema } from '../types/login.dto'
import { loginActions, loginReducer } from './login.slice'

describe('login slice', () => {
	test('test set username', () => {
		const state: DeepPartial<ILoginSchema> = {
			username: '123',
		}

		expect(loginReducer(state as ILoginSchema, loginActions.setUsername('admin'))).toEqual({ username: 'admin' })
	})

	test('test set password', () => {
		const state: DeepPartial<ILoginSchema> = {
			password: '123',
		}

		expect(loginReducer(state as ILoginSchema, loginActions.setPassword('0000'))).toEqual({ password: '0000' })
	})
})
