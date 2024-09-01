import { IStoreSchema } from 'app/providers/store-provider'

export const getUserAuthData = (state: IStoreSchema) => state.user.authData
