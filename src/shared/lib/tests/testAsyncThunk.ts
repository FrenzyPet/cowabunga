import type { IStoreSchema } from 'app/providers/store-provider'

export class TestAsyncThunk {
	dispatch: jest.MockedFn<any>
	getState: () => IStoreSchema
	actionCreator: any

	constructor(actionCreator: any) {
		this.actionCreator = actionCreator
		this.dispatch = jest.fn()
		this.getState = jest.fn()
	}

	async callThunk(arg: any) {
		const action = this.actionCreator(arg)
		const result = await action(this.dispatch, this.getState, undefined)

		return result
	}
}
