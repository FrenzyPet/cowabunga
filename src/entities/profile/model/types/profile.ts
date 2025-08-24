import { Country } from 'entities/country'
import { Currency } from 'entities/currency'

export interface IProfile {
	first?: string
	lastname?: string
	age?: string
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
