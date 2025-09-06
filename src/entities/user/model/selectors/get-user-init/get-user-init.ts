import { IStoreSchema } from 'app/providers/store-provider'

export const getUserInit = (state: IStoreSchema) => state.user._isInit
