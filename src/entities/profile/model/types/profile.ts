import { Country, Currency } from 'shared/const/common'

export interface IProfile {
	first?: string
	lastname?: string
	age?: number
	currency?: Currency
	country?: Country
	city?: string
	username?: string
	avatar?: string
}

export interface IProfileSchema {
	data?: IProfile
	form?: IProfile
	isLoading: boolean
	isSuccess: boolean
	error?: string
	readonly: boolean
}
