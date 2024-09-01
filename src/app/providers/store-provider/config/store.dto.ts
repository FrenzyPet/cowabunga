import type { ICounterSchema } from 'entities/counter'
import type { IUserSchema } from 'entities/user'
import { ILoginSchema } from 'features/auth-by-username'

export interface IStoreSchema {
	counter: ICounterSchema
	user: IUserSchema
	login: ILoginSchema
}
