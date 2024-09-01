import type { IStoreSchema } from 'app/providers/store-provider'

export const getLoginState = (state: IStoreSchema) => state.login
