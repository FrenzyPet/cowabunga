export interface ILoginSchema {
	username: string
	password: string
	isLoading: boolean
	isSuccess: boolean
	error?: string
}
