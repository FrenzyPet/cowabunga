import type { CounterSchema } from 'entities/counter'
import type { IUserSchema } from 'entities/user'

export interface StoreSchema {
	counter: CounterSchema
	user: IUserSchema
}
